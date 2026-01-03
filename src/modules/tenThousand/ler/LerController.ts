import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lers")
export default class LerController {
  @operation({
    summary: "Get Lers",
  })
  @get()
  static getLers = procedure({
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
