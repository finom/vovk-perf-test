import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myg")
export default class MygController {
  @operation({
    summary: "Get Myg",
  })
  @get()
  static getMyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myg",
  })
  @post("{id}")
  static createMyg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
