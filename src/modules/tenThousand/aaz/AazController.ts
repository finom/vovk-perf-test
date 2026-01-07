import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaz")
export default class AazController {
  @operation({
    summary: "Get Aaz",
  })
  @get()
  static getAaz = procedure({
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
