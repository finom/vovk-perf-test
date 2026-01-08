import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mza")
export default class MzaController {
  @operation({
    summary: "Get Mza",
  })
  @get()
  static getMza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mza",
  })
  @post("{id}")
  static createMza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
