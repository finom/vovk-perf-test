import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpz")
export default class BpzController {
  @operation({
    summary: "Get Bpz",
  })
  @get()
  static getBpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpz",
  })
  @post("{id}")
  static createBpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
