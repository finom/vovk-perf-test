import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juu")
export default class JuuController {
  @operation({
    summary: "Get Juu",
  })
  @get()
  static getJuu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juu",
  })
  @post("{id}")
  static createJuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
