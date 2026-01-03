import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iiis")
export default class IiiController {
  @operation({
    summary: "Get Iiis",
  })
  @get()
  static getIiis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iii",
  })
  @post("{id}")
  static createIii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
