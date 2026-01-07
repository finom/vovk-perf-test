import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljb")
export default class LjbController {
  @operation({
    summary: "Get Ljb",
  })
  @get()
  static getLjb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljb",
  })
  @post("{id}")
  static createLjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
