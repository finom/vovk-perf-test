import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqj")
export default class KqjController {
  @operation({
    summary: "Get Kqj",
  })
  @get()
  static getKqj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqj",
  })
  @post("{id}")
  static createKqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
