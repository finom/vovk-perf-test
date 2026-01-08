import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awb")
export default class AwbController {
  @operation({
    summary: "Get Awb",
  })
  @get()
  static getAwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awb",
  })
  @post("{id}")
  static createAwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
