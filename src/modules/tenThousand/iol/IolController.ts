import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iol")
export default class IolController {
  @operation({
    summary: "Get Iol",
  })
  @get()
  static getIol = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iol",
  })
  @post("{id}")
  static createIol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
