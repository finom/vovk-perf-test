import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibis")
export default class IbiController {
  @operation({
    summary: "Get Ibis",
  })
  @get()
  static getIbis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibi",
  })
  @post("{id}")
  static createIbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
