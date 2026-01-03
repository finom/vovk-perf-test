import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyds")
export default class IydController {
  @operation({
    summary: "Get Iyds",
  })
  @get()
  static getIyds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyd",
  })
  @post("{id}")
  static createIyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
