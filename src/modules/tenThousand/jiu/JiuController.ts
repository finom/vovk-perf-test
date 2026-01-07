import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiu")
export default class JiuController {
  @operation({
    summary: "Get Jiu",
  })
  @get()
  static getJiu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jiu",
  })
  @post("{id}")
  static createJiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
