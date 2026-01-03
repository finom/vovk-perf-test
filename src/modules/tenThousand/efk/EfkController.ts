import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efks")
export default class EfkController {
  @operation({
    summary: "Get Efks",
  })
  @get()
  static getEfks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efk",
  })
  @post("{id}")
  static createEfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
