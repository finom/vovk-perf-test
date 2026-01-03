import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikus")
export default class IkuController {
  @operation({
    summary: "Get Ikus",
  })
  @get()
  static getIkus = procedure({
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
