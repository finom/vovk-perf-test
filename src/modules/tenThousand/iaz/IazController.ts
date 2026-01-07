import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaz")
export default class IazController {
  @operation({
    summary: "Get Iaz",
  })
  @get()
  static getIaz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iaz",
  })
  @post("{id}")
  static createIaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
