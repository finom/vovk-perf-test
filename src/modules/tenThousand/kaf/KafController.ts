import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kafs")
export default class KafController {
  @operation({
    summary: "Get Kafs",
  })
  @get()
  static getKafs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kaf",
  })
  @post("{id}")
  static createKaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
