import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbos")
export default class HboController {
  @operation({
    summary: "Get Hbos",
  })
  @get()
  static getHbos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbo",
  })
  @post("{id}")
  static createHbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
