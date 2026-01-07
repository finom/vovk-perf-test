import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cj")
export default class CjController {
  @operation({
    summary: "Get Cj",
  })
  @get()
  static getCj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cj",
  })
  @post("{id}")
  static createCj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
