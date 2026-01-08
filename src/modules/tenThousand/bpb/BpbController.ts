import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpb")
export default class BpbController {
  @operation({
    summary: "Get Bpb",
  })
  @get()
  static getBpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpb",
  })
  @post("{id}")
  static createBpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
