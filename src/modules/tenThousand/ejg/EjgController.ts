import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejg")
export default class EjgController {
  @operation({
    summary: "Get Ejg",
  })
  @get()
  static getEjg = procedure({
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
