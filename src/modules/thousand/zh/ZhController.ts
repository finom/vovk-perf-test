import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zh")
export default class ZhController {
  @operation({
    summary: "Get Zh",
  })
  @get()
  static getZh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zh",
  })
  @post("{id}")
  static createZh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
