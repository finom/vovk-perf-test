import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqgs")
export default class KqgController {
  @operation({
    summary: "Get Kqgs",
  })
  @get()
  static getKqgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqg",
  })
  @post("{id}")
  static createKqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
