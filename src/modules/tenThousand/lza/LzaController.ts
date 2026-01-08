import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lza")
export default class LzaController {
  @operation({
    summary: "Get Lza",
  })
  @get()
  static getLza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lza",
  })
  @post("{id}")
  static createLza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
