import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blrs")
export default class BlrController {
  @operation({
    summary: "Get Blrs",
  })
  @get()
  static getBlrs = procedure({
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
