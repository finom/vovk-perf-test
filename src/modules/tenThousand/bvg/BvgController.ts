import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvg")
export default class BvgController {
  @operation({
    summary: "Get Bvg",
  })
  @get()
  static getBvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvg",
  })
  @post("{id}")
  static createBvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
