import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwk")
export default class CwkController {
  @operation({
    summary: "Get Cwk",
  })
  @get()
  static getCwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwk",
  })
  @post("{id}")
  static createCwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
