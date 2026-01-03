import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itns")
export default class ItnController {
  @operation({
    summary: "Get Itns",
  })
  @get()
  static getItns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itn",
  })
  @post("{id}")
  static createItn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
