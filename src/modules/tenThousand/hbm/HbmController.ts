import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbm")
export default class HbmController {
  @operation({
    summary: "Get Hbm",
  })
  @get()
  static getHbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbm",
  })
  @post("{id}")
  static createHbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
