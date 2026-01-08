import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zj")
export default class ZjController {
  @operation({
    summary: "Get Zj",
  })
  @get()
  static getZj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zj",
  })
  @post("{id}")
  static createZj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
