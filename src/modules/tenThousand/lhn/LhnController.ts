import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhn")
export default class LhnController {
  @operation({
    summary: "Get Lhn",
  })
  @get()
  static getLhn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhn",
  })
  @post("{id}")
  static createLhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
