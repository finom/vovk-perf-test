import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yh")
export default class YhController {
  @operation({
    summary: "Get Yh",
  })
  @get()
  static getYh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yh",
  })
  @post("{id}")
  static createYh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
