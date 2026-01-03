import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iphs")
export default class IphController {
  @operation({
    summary: "Get Iphs",
  })
  @get()
  static getIphs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iph",
  })
  @post("{id}")
  static createIph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
