import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dap")
export default class DapController {
  @operation({
    summary: "Get Dap",
  })
  @get()
  static getDap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dap",
  })
  @post("{id}")
  static createDap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
