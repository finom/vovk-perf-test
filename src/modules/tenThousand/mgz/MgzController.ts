import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgz")
export default class MgzController {
  @operation({
    summary: "Get Mgz",
  })
  @get()
  static getMgz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgz",
  })
  @post("{id}")
  static createMgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
