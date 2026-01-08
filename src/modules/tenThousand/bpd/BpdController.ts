import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpd")
export default class BpdController {
  @operation({
    summary: "Get Bpd",
  })
  @get()
  static getBpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpd",
  })
  @post("{id}")
  static createBpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
