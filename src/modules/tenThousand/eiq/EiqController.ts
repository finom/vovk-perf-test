import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eiq")
export default class EiqController {
  @operation({
    summary: "Get Eiq",
  })
  @get()
  static getEiq = procedure({
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
