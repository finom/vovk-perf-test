import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lln")
export default class LlnController {
  @operation({
    summary: "Get Lln",
  })
  @get()
  static getLln = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lln",
  })
  @post("{id}")
  static createLln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
