import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqus")
export default class IquController {
  @operation({
    summary: "Get Iqus",
  })
  @get()
  static getIqus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqu",
  })
  @post("{id}")
  static createIqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
