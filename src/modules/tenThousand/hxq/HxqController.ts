import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxq")
export default class HxqController {
  @operation({
    summary: "Get Hxq",
  })
  @get()
  static getHxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxq",
  })
  @post("{id}")
  static createHxq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
