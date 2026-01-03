import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejbs")
export default class EjbController {
  @operation({
    summary: "Get Ejbs",
  })
  @get()
  static getEjbs = procedure({
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
