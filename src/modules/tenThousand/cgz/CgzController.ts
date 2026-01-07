import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgz")
export default class CgzController {
  @operation({
    summary: "Get Cgz",
  })
  @get()
  static getCgz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgz",
  })
  @post("{id}")
  static createCgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
