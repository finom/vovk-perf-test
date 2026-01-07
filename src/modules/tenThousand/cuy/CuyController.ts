import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuy")
export default class CuyController {
  @operation({
    summary: "Get Cuy",
  })
  @get()
  static getCuy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuy",
  })
  @post("{id}")
  static createCuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
