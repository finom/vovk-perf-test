import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etc")
export default class EtcController {
  @operation({
    summary: "Get Etc",
  })
  @get()
  static getEtc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etc",
  })
  @post("{id}")
  static createEtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
