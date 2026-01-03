import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezus")
export default class EzuController {
  @operation({
    summary: "Get Ezus",
  })
  @get()
  static getEzus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezu",
  })
  @post("{id}")
  static createEzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
