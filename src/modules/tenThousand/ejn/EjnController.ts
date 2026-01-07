import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejn")
export default class EjnController {
  @operation({
    summary: "Get Ejn",
  })
  @get()
  static getEjn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejn",
  })
  @post("{id}")
  static createEjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
