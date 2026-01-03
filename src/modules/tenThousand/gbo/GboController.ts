import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbos")
export default class GboController {
  @operation({
    summary: "Get Gbos",
  })
  @get()
  static getGbos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbo",
  })
  @post("{id}")
  static createGbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
