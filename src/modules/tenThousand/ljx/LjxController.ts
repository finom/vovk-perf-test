import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljxes")
export default class LjxController {
  @operation({
    summary: "Get Ljxes",
  })
  @get()
  static getLjxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljx",
  })
  @post("{id}")
  static createLjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
