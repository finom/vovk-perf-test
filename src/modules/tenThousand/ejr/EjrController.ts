import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejrs")
export default class EjrController {
  @operation({
    summary: "Get Ejrs",
  })
  @get()
  static getEjrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejr",
  })
  @post("{id}")
  static createEjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
