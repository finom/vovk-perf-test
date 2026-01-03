import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aazs")
export default class AazController {
  @operation({
    summary: "Get Aazs",
  })
  @get()
  static getAazs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aaz",
  })
  @post("{id}")
  static createAaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
