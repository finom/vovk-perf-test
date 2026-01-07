import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cu")
export default class CuController {
  @operation({
    summary: "Get Cu",
  })
  @get()
  static getCu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cu",
  })
  @post("{id}")
  static createCu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
