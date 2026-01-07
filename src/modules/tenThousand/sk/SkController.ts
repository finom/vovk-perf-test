import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sk")
export default class SkController {
  @operation({
    summary: "Get Sk",
  })
  @get()
  static getSk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sk",
  })
  @post("{id}")
  static createSk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
