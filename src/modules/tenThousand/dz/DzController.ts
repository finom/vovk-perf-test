import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dz")
export default class DzController {
  @operation({
    summary: "Get Dz",
  })
  @get()
  static getDz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dz",
  })
  @post("{id}")
  static createDz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
