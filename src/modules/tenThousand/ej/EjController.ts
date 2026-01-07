import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ej")
export default class EjController {
  @operation({
    summary: "Get Ej",
  })
  @get()
  static getEj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ej",
  })
  @post("{id}")
  static createEj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
