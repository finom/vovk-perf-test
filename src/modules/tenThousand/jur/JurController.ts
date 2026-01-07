import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jur")
export default class JurController {
  @operation({
    summary: "Get Jur",
  })
  @get()
  static getJur = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jur",
  })
  @post("{id}")
  static createJur = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
