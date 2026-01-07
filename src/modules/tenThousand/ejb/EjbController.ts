import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejb")
export default class EjbController {
  @operation({
    summary: "Get Ejb",
  })
  @get()
  static getEjb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejb",
  })
  @post("{id}")
  static createEjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
