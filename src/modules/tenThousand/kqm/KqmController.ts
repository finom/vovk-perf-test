import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqm")
export default class KqmController {
  @operation({
    summary: "Get Kqm",
  })
  @get()
  static getKqm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqm",
  })
  @post("{id}")
  static createKqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
