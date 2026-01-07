import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqb")
export default class KqbController {
  @operation({
    summary: "Get Kqb",
  })
  @get()
  static getKqb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqb",
  })
  @post("{id}")
  static createKqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
