import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hz")
export default class HzController {
  @operation({
    summary: "Get Hz",
  })
  @get()
  static getHz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hz",
  })
  @post("{id}")
  static createHz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
