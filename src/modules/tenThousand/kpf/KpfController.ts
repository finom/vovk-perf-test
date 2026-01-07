import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpf")
export default class KpfController {
  @operation({
    summary: "Get Kpf",
  })
  @get()
  static getKpf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpf",
  })
  @post("{id}")
  static createKpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
