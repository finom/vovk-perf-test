import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myj")
export default class MyjController {
  @operation({
    summary: "Get Myj",
  })
  @get()
  static getMyj = procedure({
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
