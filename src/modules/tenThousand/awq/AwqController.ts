import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awq")
export default class AwqController {
  @operation({
    summary: "Get Awq",
  })
  @get()
  static getAwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awq",
  })
  @post("{id}")
  static createAwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
