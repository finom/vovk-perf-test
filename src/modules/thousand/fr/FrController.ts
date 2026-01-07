import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fr")
export default class FrController {
  @operation({
    summary: "Get Fr",
  })
  @get()
  static getFr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fr",
  })
  @post("{id}")
  static createFr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
