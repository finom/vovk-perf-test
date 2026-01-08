import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcl")
export default class DclController {
  @operation({
    summary: "Get Dcl",
  })
  @get()
  static getDcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcl",
  })
  @post("{id}")
  static createDcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
