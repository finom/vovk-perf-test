import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiz")
export default class KizController {
  @operation({
    summary: "Get Kiz",
  })
  @get()
  static getKiz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kiz",
  })
  @post("{id}")
  static createKiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
