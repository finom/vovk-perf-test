import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ciw")
export default class CiwController {
  @operation({
    summary: "Get Ciw",
  })
  @get()
  static getCiw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ciw",
  })
  @post("{id}")
  static createCiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
