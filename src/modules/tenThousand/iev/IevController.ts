import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iev")
export default class IevController {
  @operation({
    summary: "Get Iev",
  })
  @get()
  static getIev = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iev",
  })
  @post("{id}")
  static createIev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
