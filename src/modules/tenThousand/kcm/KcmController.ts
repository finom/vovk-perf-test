import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcm")
export default class KcmController {
  @operation({
    summary: "Get Kcm",
  })
  @get()
  static getKcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcm",
  })
  @post("{id}")
  static createKcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
