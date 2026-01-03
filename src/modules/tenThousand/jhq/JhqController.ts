import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhqs")
export default class JhqController {
  @operation({
    summary: "Get Jhqs",
  })
  @get()
  static getJhqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhq",
  })
  @post("{id}")
  static createJhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
