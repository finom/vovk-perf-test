import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avo")
export default class AvoController {
  @operation({
    summary: "Get Avo",
  })
  @get()
  static getAvo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avo",
  })
  @post("{id}")
  static createAvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
