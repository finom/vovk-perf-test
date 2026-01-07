import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyw")
export default class KywController {
  @operation({
    summary: "Get Kyw",
  })
  @get()
  static getKyw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyw",
  })
  @post("{id}")
  static createKyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
