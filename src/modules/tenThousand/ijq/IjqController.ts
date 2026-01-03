import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijqs")
export default class IjqController {
  @operation({
    summary: "Get Ijqs",
  })
  @get()
  static getIjqs = procedure({
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
