import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vm")
export default class VmController {
  @operation({
    summary: "Get Vm",
  })
  @get()
  static getVm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vm",
  })
  @post("{id}")
  static createVm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
