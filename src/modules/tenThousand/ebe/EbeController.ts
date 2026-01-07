import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebe")
export default class EbeController {
  @operation({
    summary: "Get Ebe",
  })
  @get()
  static getEbe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebe",
  })
  @post("{id}")
  static createEbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
