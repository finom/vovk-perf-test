import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiqs")
export default class HiqController {
  @operation({
    summary: "Get Hiqs",
  })
  @get()
  static getHiqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hiq",
  })
  @post("{id}")
  static createHiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
