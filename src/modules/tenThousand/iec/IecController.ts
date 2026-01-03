import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iecs")
export default class IecController {
  @operation({
    summary: "Get Iecs",
  })
  @get()
  static getIecs = procedure({
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
