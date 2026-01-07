import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejq")
export default class EjqController {
  @operation({
    summary: "Get Ejq",
  })
  @get()
  static getEjq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejq",
  })
  @post("{id}")
  static createEjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
