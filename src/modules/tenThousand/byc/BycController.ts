import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byc")
export default class BycController {
  @operation({
    summary: "Get Byc",
  })
  @get()
  static getByc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byc",
  })
  @post("{id}")
  static createByc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
