import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejzs")
export default class EjzController {
  @operation({
    summary: "Get Ejzs",
  })
  @get()
  static getEjzs = procedure({
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
