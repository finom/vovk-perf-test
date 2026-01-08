import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("buo")
export default class BuoController {
  @operation({
    summary: "Get Buo",
  })
  @get()
  static getBuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buo",
  })
  @post("{id}")
  static createBuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
