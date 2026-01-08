import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awm")
export default class AwmController {
  @operation({
    summary: "Get Awm",
  })
  @get()
  static getAwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awm",
  })
  @post("{id}")
  static createAwm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
