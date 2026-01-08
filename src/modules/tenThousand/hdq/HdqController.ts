import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdq")
export default class HdqController {
  @operation({
    summary: "Get Hdq",
  })
  @get()
  static getHdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdq",
  })
  @post("{id}")
  static createHdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
