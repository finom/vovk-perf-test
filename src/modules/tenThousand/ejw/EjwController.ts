import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejw")
export default class EjwController {
  @operation({
    summary: "Get Ejw",
  })
  @get()
  static getEjw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejw",
  })
  @post("{id}")
  static createEjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
