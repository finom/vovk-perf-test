import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kch")
export default class KchController {
  @operation({
    summary: "Get Kch",
  })
  @get()
  static getKch = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kch",
  })
  @post("{id}")
  static createKch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
