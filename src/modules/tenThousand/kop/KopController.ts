import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kop")
export default class KopController {
  @operation({
    summary: "Get Kop",
  })
  @get()
  static getKop = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kop",
  })
  @post("{id}")
  static createKop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
