import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blr")
export default class BlrController {
  @operation({
    summary: "Get Blr",
  })
  @get()
  static getBlr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blr",
  })
  @post("{id}")
  static createBlr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
