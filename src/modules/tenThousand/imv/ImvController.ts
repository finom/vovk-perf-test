import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imv")
export default class ImvController {
  @operation({
    summary: "Get Imv",
  })
  @get()
  static getImv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imv",
  })
  @post("{id}")
  static createImv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
