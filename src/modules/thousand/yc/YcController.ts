import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yc")
export default class YcController {
  @operation({
    summary: "Get Yc",
  })
  @get()
  static getYc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yc",
  })
  @post("{id}")
  static createYc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
