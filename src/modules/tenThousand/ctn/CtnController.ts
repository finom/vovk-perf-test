import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctn")
export default class CtnController {
  @operation({
    summary: "Get Ctn",
  })
  @get()
  static getCtn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctn",
  })
  @post("{id}")
  static createCtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
