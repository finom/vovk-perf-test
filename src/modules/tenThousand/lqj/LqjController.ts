import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqj")
export default class LqjController {
  @operation({
    summary: "Get Lqj",
  })
  @get()
  static getLqj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqj",
  })
  @post("{id}")
  static createLqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
