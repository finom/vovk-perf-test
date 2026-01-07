import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kao")
export default class KaoController {
  @operation({
    summary: "Get Kao",
  })
  @get()
  static getKao = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kao",
  })
  @post("{id}")
  static createKao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
