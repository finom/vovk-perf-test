import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilj")
export default class IljController {
  @operation({
    summary: "Get Ilj",
  })
  @get()
  static getIlj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilj",
  })
  @post("{id}")
  static createIlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
