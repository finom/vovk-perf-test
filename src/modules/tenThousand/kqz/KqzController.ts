import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqzs")
export default class KqzController {
  @operation({
    summary: "Get Kqzs",
  })
  @get()
  static getKqzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqz",
  })
  @post("{id}")
  static createKqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
