import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acp")
export default class AcpController {
  @operation({
    summary: "Get Acp",
  })
  @get()
  static getAcp = procedure({
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
