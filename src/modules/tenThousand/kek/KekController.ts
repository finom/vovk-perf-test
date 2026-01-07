import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kek")
export default class KekController {
  @operation({
    summary: "Get Kek",
  })
  @get()
  static getKek = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kek",
  })
  @post("{id}")
  static createKek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
