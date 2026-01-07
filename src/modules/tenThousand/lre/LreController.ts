import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lre")
export default class LreController {
  @operation({
    summary: "Get Lre",
  })
  @get()
  static getLre = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lre",
  })
  @post("{id}")
  static createLre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
