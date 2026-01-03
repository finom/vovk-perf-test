import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acps")
export default class AcpController {
  @operation({
    summary: "Get Acps",
  })
  @get()
  static getAcps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acp",
  })
  @post("{id}")
  static createAcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
