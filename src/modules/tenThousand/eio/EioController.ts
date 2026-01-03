import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eios")
export default class EioController {
  @operation({
    summary: "Get Eios",
  })
  @get()
  static getEios = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eio",
  })
  @post("{id}")
  static createEio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
