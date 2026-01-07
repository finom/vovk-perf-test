import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adt")
export default class AdtController {
  @operation({
    summary: "Get Adt",
  })
  @get()
  static getAdt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adt",
  })
  @post("{id}")
  static createAdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
