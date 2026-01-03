import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eiqs")
export default class EiqController {
  @operation({
    summary: "Get Eiqs",
  })
  @get()
  static getEiqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eiq",
  })
  @post("{id}")
  static createEiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
