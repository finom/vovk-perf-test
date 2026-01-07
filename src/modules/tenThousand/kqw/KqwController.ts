import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqw")
export default class KqwController {
  @operation({
    summary: "Get Kqw",
  })
  @get()
  static getKqw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqw",
  })
  @post("{id}")
  static createKqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
