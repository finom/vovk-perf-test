import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhvs")
export default class JhvController {
  @operation({
    summary: "Get Jhvs",
  })
  @get()
  static getJhvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhv",
  })
  @post("{id}")
  static createJhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
