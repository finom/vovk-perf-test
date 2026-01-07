import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejj")
export default class EjjController {
  @operation({
    summary: "Get Ejj",
  })
  @get()
  static getEjj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejj",
  })
  @post("{id}")
  static createEjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
