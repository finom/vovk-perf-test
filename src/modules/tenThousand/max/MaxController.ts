import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("max")
export default class MaxController {
  @operation({
    summary: "Get Max",
  })
  @get()
  static getMax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Max",
  })
  @post("{id}")
  static createMax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
