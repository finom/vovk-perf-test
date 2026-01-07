import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npf")
export default class NpfController {
  @operation({
    summary: "Get Npf",
  })
  @get()
  static getNpf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npf",
  })
  @post("{id}")
  static createNpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
