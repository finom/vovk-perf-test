import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqr")
export default class IqrController {
  @operation({
    summary: "Get Iqr",
  })
  @get()
  static getIqr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqr",
  })
  @post("{id}")
  static createIqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
