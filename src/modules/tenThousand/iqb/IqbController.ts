import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqb")
export default class IqbController {
  @operation({
    summary: "Get Iqb",
  })
  @get()
  static getIqb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqb",
  })
  @post("{id}")
  static createIqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
