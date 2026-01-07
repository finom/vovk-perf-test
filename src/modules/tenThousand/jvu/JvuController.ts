import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvu")
export default class JvuController {
  @operation({
    summary: "Get Jvu",
  })
  @get()
  static getJvu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvu",
  })
  @post("{id}")
  static createJvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
