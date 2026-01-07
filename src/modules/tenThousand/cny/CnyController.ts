import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cny")
export default class CnyController {
  @operation({
    summary: "Get Cny",
  })
  @get()
  static getCny = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cny",
  })
  @post("{id}")
  static createCny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
