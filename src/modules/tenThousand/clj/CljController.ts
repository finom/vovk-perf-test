import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clj")
export default class CljController {
  @operation({
    summary: "Get Clj",
  })
  @get()
  static getClj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clj",
  })
  @post("{id}")
  static createClj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
