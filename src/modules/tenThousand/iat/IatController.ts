import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iats")
export default class IatController {
  @operation({
    summary: "Get Iats",
  })
  @get()
  static getIats = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iat",
  })
  @post("{id}")
  static createIat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
