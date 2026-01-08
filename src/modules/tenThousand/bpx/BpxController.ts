import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpx")
export default class BpxController {
  @operation({
    summary: "Get Bpx",
  })
  @get()
  static getBpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpx",
  })
  @post("{id}")
  static createBpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
