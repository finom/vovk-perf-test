import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
