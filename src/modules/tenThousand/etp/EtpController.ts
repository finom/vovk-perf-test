import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etp")
export default class EtpController {
  @operation({
    summary: "Get Etp",
  })
  @get()
  static getEtp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etp",
  })
  @post("{id}")
  static createEtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
