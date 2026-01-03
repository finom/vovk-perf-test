import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiqs")
export default class AiqController {
  @operation({
    summary: "Get Aiqs",
  })
  @get()
  static getAiqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aiq",
  })
  @post("{id}")
  static createAiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
