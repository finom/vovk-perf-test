import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbb")
export default class CbbController {
  @operation({
    summary: "Get Cbb",
  })
  @get()
  static getCbb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbb",
  })
  @post("{id}")
  static createCbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
