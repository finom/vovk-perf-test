import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqrs")
export default class IqrController {
  @operation({
    summary: "Get Iqrs",
  })
  @get()
  static getIqrs = procedure({
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
