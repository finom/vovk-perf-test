import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzz")
export default class HzzController {
  @operation({
    summary: "Get Hzz",
  })
  @get()
  static getHzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzz",
  })
  @post("{id}")
  static createHzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
