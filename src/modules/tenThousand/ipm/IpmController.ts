import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipms")
export default class IpmController {
  @operation({
    summary: "Get Ipms",
  })
  @get()
  static getIpms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipm",
  })
  @post("{id}")
  static createIpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
