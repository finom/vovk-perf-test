import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpq")
export default class BpqController {
  @operation({
    summary: "Get Bpq",
  })
  @get()
  static getBpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpq",
  })
  @post("{id}")
  static createBpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
