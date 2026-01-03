import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efes")
export default class EfeController {
  @operation({
    summary: "Get Efes",
  })
  @get()
  static getEfes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efe",
  })
  @post("{id}")
  static createEfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
