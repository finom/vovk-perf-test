import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqh")
export default class KqhController {
  @operation({
    summary: "Get Kqh",
  })
  @get()
  static getKqh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqh",
  })
  @post("{id}")
  static createKqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
