import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipj")
export default class IpjController {
  @operation({
    summary: "Get Ipj",
  })
  @get()
  static getIpj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipj",
  })
  @post("{id}")
  static createIpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
