import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efws")
export default class EfwController {
  @operation({
    summary: "Get Efws",
  })
  @get()
  static getEfws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efw",
  })
  @post("{id}")
  static createEfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
