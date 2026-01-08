import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arn")
export default class ArnController {
  @operation({
    summary: "Get Arn",
  })
  @get()
  static getArn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arn",
  })
  @post("{id}")
  static createArn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
