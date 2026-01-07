import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdz")
export default class BdzController {
  @operation({
    summary: "Get Bdz",
  })
  @get()
  static getBdz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdz",
  })
  @post("{id}")
  static createBdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
