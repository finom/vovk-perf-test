import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijb")
export default class IjbController {
  @operation({
    summary: "Get Ijb",
  })
  @get()
  static getIjb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijb",
  })
  @post("{id}")
  static createIjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
