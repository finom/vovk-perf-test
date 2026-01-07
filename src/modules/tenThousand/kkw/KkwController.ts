import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkw")
export default class KkwController {
  @operation({
    summary: "Get Kkw",
  })
  @get()
  static getKkw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkw",
  })
  @post("{id}")
  static createKkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
