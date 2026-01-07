import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpf")
export default class HpfController {
  @operation({
    summary: "Get Hpf",
  })
  @get()
  static getHpf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpf",
  })
  @post("{id}")
  static createHpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
