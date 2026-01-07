import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ciy")
export default class CiyController {
  @operation({
    summary: "Get Ciy",
  })
  @get()
  static getCiy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ciy",
  })
  @post("{id}")
  static createCiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
