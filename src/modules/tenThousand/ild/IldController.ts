import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ild")
export default class IldController {
  @operation({
    summary: "Get Ild",
  })
  @get()
  static getIld = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ild",
  })
  @post("{id}")
  static createIld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
