import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljx")
export default class LjxController {
  @operation({
    summary: "Get Ljx",
  })
  @get()
  static getLjx = procedure({
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
