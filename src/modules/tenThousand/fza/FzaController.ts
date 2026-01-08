import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fza")
export default class FzaController {
  @operation({
    summary: "Get Fza",
  })
  @get()
  static getFza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fza",
  })
  @post("{id}")
  static createFza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
