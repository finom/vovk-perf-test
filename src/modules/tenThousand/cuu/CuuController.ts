import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuu")
export default class CuuController {
  @operation({
    summary: "Get Cuu",
  })
  @get()
  static getCuu = procedure({
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
