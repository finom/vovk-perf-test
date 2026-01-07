import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iec")
export default class IecController {
  @operation({
    summary: "Get Iec",
  })
  @get()
  static getIec = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iec",
  })
  @post("{id}")
  static createIec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
