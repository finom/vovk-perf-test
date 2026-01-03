import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cucs")
export default class CucController {
  @operation({
    summary: "Get Cucs",
  })
  @get()
  static getCucs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuc",
  })
  @post("{id}")
  static createCuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
