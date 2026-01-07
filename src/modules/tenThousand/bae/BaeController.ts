import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bae")
export default class BaeController {
  @operation({
    summary: "Get Bae",
  })
  @get()
  static getBae = procedure({
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
