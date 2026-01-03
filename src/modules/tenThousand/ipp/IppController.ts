import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipps")
export default class IppController {
  @operation({
    summary: "Get Ipps",
  })
  @get()
  static getIpps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipp",
  })
  @post("{id}")
  static createIpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
