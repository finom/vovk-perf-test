import { procedure, prefix, get, post, operation } from "vovk";

@prefix("keq")
export default class KeqController {
  @operation({
    summary: "Get Keq",
  })
  @get()
  static getKeq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Keq",
  })
  @post("{id}")
  static createKeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
