import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sks")
export default class SkController {
  @operation({
    summary: "Get Sks",
  })
  @get()
  static getSks = procedure({
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
