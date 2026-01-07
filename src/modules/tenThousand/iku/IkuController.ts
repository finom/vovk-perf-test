import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iku")
export default class IkuController {
  @operation({
    summary: "Get Iku",
  })
  @get()
  static getIku = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iku",
  })
  @post("{id}")
  static createIku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
