import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loe")
export default class LoeController {
  @operation({
    summary: "Get Loe",
  })
  @get()
  static getLoe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loe",
  })
  @post("{id}")
  static createLoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
