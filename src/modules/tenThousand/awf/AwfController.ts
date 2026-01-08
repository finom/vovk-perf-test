import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awf")
export default class AwfController {
  @operation({
    summary: "Get Awf",
  })
  @get()
  static getAwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awf",
  })
  @post("{id}")
  static createAwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
