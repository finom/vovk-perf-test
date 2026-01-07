import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpf")
export default class DpfController {
  @operation({
    summary: "Get Dpf",
  })
  @get()
  static getDpf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpf",
  })
  @post("{id}")
  static createDpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
