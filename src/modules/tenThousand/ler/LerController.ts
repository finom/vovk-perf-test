import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ler")
export default class LerController {
  @operation({
    summary: "Get Ler",
  })
  @get()
  static getLer = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ler",
  })
  @post("{id}")
  static createLer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
