import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpf")
export default class BpfController {
  @operation({
    summary: "Get Bpf",
  })
  @get()
  static getBpf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpf",
  })
  @post("{id}")
  static createBpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
