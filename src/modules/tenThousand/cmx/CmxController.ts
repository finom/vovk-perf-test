import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmx")
export default class CmxController {
  @operation({
    summary: "Get Cmx",
  })
  @get()
  static getCmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmx",
  })
  @post("{id}")
  static createCmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
