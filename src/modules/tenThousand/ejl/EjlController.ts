import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejl")
export default class EjlController {
  @operation({
    summary: "Get Ejl",
  })
  @get()
  static getEjl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejl",
  })
  @post("{id}")
  static createEjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
