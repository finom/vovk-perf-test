import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijq")
export default class IjqController {
  @operation({
    summary: "Get Ijq",
  })
  @get()
  static getIjq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijq",
  })
  @post("{id}")
  static createIjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
