import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaos")
export default class JaoController {
  @operation({
    summary: "Get Jaos",
  })
  @get()
  static getJaos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jao",
  })
  @post("{id}")
  static createJao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
