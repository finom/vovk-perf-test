import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqv")
export default class KqvController {
  @operation({
    summary: "Get Kqv",
  })
  @get()
  static getKqv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqv",
  })
  @post("{id}")
  static createKqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
