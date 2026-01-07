import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ij")
export default class IjController {
  @operation({
    summary: "Get Ij",
  })
  @get()
  static getIj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ij",
  })
  @post("{id}")
  static createIj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
