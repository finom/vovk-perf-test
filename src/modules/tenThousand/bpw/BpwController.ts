import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpw")
export default class BpwController {
  @operation({
    summary: "Get Bpw",
  })
  @get()
  static getBpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpw",
  })
  @post("{id}")
  static createBpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
