import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ius")
export default class IuController {
  @operation({
    summary: "Get Ius",
  })
  @get()
  static getIus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iu",
  })
  @post("{id}")
  static createIu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
