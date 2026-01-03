import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnus")
export default class JnuController {
  @operation({
    summary: "Get Jnus",
  })
  @get()
  static getJnus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnu",
  })
  @post("{id}")
  static createJnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
