import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaf")
export default class KafController {
  @operation({
    summary: "Get Kaf",
  })
  @get()
  static getKaf = procedure({
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
