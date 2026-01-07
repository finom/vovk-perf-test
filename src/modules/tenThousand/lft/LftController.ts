import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lft")
export default class LftController {
  @operation({
    summary: "Get Lft",
  })
  @get()
  static getLft = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lft",
  })
  @post("{id}")
  static createLft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
