import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejgs")
export default class EjgController {
  @operation({
    summary: "Get Ejgs",
  })
  @get()
  static getEjgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejg",
  })
  @post("{id}")
  static createEjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
