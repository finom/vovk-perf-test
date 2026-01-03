import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfhs")
export default class BfhController {
  @operation({
    summary: "Get Bfhs",
  })
  @get()
  static getBfhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfh",
  })
  @post("{id}")
  static createBfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
