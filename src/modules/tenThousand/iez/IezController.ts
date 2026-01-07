import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iez")
export default class IezController {
  @operation({
    summary: "Get Iez",
  })
  @get()
  static getIez = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iez",
  })
  @post("{id}")
  static createIez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
