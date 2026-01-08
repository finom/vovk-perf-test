import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpc")
export default class DpcController {
  @operation({
    summary: "Get Dpc",
  })
  @get()
  static getDpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpc",
  })
  @post("{id}")
  static createDpc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
