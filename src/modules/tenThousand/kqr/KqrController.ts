import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqr")
export default class KqrController {
  @operation({
    summary: "Get Kqr",
  })
  @get()
  static getKqr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqr",
  })
  @post("{id}")
  static createKqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
