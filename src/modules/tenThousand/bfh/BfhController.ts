import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfh")
export default class BfhController {
  @operation({
    summary: "Get Bfh",
  })
  @get()
  static getBfh = procedure({
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
