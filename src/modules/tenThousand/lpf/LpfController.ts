import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpfs")
export default class LpfController {
  @operation({
    summary: "Get Lpfs",
  })
  @get()
  static getLpfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpf",
  })
  @post("{id}")
  static createLpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
