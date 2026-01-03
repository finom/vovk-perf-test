import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuus")
export default class CuuController {
  @operation({
    summary: "Get Cuus",
  })
  @get()
  static getCuus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuu",
  })
  @post("{id}")
  static createCuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
