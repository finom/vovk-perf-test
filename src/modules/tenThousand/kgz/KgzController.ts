import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgz")
export default class KgzController {
  @operation({
    summary: "Get Kgz",
  })
  @get()
  static getKgz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgz",
  })
  @post("{id}")
  static createKgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
