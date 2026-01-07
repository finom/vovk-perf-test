import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpn")
export default class CpnController {
  @operation({
    summary: "Get Cpn",
  })
  @get()
  static getCpn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpn",
  })
  @post("{id}")
  static createCpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
