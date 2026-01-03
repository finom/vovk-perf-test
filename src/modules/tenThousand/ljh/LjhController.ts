import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljhs")
export default class LjhController {
  @operation({
    summary: "Get Ljhs",
  })
  @get()
  static getLjhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljh",
  })
  @post("{id}")
  static createLjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
