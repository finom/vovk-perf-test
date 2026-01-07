import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfz")
export default class BfzController {
  @operation({
    summary: "Get Bfz",
  })
  @get()
  static getBfz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfz",
  })
  @post("{id}")
  static createBfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
