import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etk")
export default class EtkController {
  @operation({
    summary: "Get Etk",
  })
  @get()
  static getEtk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etk",
  })
  @post("{id}")
  static createEtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
