import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yp")
export default class YpController {
  @operation({
    summary: "Get Yp",
  })
  @get()
  static getYp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yp",
  })
  @post("{id}")
  static createYp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
