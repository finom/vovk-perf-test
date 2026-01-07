import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dap")
export default class DapController {
  @operation({
    summary: "Get Dap",
  })
  @get()
  static getDap = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dap",
  })
  @post("{id}")
  static createDap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
