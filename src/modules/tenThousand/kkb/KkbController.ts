import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkb")
export default class KkbController {
  @operation({
    summary: "Get Kkb",
  })
  @get()
  static getKkb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkb",
  })
  @post("{id}")
  static createKkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
