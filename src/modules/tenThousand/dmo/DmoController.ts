import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmo")
export default class DmoController {
  @operation({
    summary: "Get Dmo",
  })
  @get()
  static getDmo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmo",
  })
  @post("{id}")
  static createDmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
