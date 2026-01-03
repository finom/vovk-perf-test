import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqzs")
export default class AqzController {
  @operation({
    summary: "Get Aqzs",
  })
  @get()
  static getAqzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqz",
  })
  @post("{id}")
  static createAqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
