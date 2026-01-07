import { procedure, prefix, get, post, operation } from "vovk";

@prefix("law")
export default class LawController {
  @operation({
    summary: "Get Law",
  })
  @get()
  static getLaw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Law",
  })
  @post("{id}")
  static createLaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
