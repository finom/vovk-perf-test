import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpv")
export default class CpvController {
  @operation({
    summary: "Get Cpv",
  })
  @get()
  static getCpv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpv",
  })
  @post("{id}")
  static createCpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
