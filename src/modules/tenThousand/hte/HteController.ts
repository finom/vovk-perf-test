import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hte")
export default class HteController {
  @operation({
    summary: "Get Hte",
  })
  @get()
  static getHte = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hte",
  })
  @post("{id}")
  static createHte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
