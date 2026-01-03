import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejs")
export default class EjsController {
  @operation({
    summary: "Get Ejs",
  })
  @get()
  static getEjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejs",
  })
  @post("{id}")
  static createEjs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
