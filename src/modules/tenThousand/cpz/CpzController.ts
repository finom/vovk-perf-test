import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpzs")
export default class CpzController {
  @operation({
    summary: "Get Cpzs",
  })
  @get()
  static getCpzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpz",
  })
  @post("{id}")
  static createCpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
