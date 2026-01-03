import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqqs")
export default class GqqController {
  @operation({
    summary: "Get Gqqs",
  })
  @get()
  static getGqqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqq",
  })
  @post("{id}")
  static createGqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
