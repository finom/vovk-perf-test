import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jli")
export default class JliController {
  @operation({
    summary: "Get Jli",
  })
  @get()
  static getJli = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jli",
  })
  @post("{id}")
  static createJli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
