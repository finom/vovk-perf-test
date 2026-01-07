import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejz")
export default class EjzController {
  @operation({
    summary: "Get Ejz",
  })
  @get()
  static getEjz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejz",
  })
  @post("{id}")
  static createEjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
