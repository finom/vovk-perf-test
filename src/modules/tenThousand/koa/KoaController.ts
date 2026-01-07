import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koa")
export default class KoaController {
  @operation({
    summary: "Get Koa",
  })
  @get()
  static getKoa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Koa",
  })
  @post("{id}")
  static createKoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
