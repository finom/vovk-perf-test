import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfj")
export default class BfjController {
  @operation({
    summary: "Get Bfj",
  })
  @get()
  static getBfj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfj",
  })
  @post("{id}")
  static createBfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
