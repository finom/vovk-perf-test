import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iha")
export default class IhaController {
  @operation({
    summary: "Get Iha",
  })
  @get()
  static getIha = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iha",
  })
  @post("{id}")
  static createIha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
