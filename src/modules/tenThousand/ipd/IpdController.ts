import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipds")
export default class IpdController {
  @operation({
    summary: "Get Ipds",
  })
  @get()
  static getIpds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipd",
  })
  @post("{id}")
  static createIpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
