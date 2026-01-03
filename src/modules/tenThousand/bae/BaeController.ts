import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baes")
export default class BaeController {
  @operation({
    summary: "Get Baes",
  })
  @get()
  static getBaes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bae",
  })
  @post("{id}")
  static createBae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
