import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myjs")
export default class MyjController {
  @operation({
    summary: "Get Myjs",
  })
  @get()
  static getMyjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myj",
  })
  @post("{id}")
  static createMyj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
