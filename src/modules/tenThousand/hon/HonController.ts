import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hon")
export default class HonController {
  @operation({
    summary: "Get Hon",
  })
  @get()
  static getHon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hon",
  })
  @post("{id}")
  static createHon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
