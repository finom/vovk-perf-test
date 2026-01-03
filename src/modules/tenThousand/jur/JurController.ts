import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jurs")
export default class JurController {
  @operation({
    summary: "Get Jurs",
  })
  @get()
  static getJurs = procedure({
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
