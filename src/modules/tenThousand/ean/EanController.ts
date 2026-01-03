import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eans")
export default class EanController {
  @operation({
    summary: "Get Eans",
  })
  @get()
  static getEans = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ean",
  })
  @post("{id}")
  static createEan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
