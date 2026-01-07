import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpz")
export default class CpzController {
  @operation({
    summary: "Get Cpz",
  })
  @get()
  static getCpz = procedure({
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
