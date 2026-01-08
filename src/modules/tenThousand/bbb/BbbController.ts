import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbb")
export default class BbbController {
  @operation({
    summary: "Get Bbb",
  })
  @get()
  static getBbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbb",
  })
  @post("{id}")
  static createBbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
