import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbj")
export default class GbjController {
  @operation({
    summary: "Get Gbj",
  })
  @get()
  static getGbj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbj",
  })
  @post("{id}")
  static createGbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
