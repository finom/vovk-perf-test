import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awp")
export default class AwpController {
  @operation({
    summary: "Get Awp",
  })
  @get()
  static getAwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awp",
  })
  @post("{id}")
  static createAwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
