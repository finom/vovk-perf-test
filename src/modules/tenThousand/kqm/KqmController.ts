import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqms")
export default class KqmController {
  @operation({
    summary: "Get Kqms",
  })
  @get()
  static getKqms = procedure({
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
