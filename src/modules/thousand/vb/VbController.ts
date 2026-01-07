import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vb")
export default class VbController {
  @operation({
    summary: "Get Vb",
  })
  @get()
  static getVb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vb",
  })
  @post("{id}")
  static createVb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
