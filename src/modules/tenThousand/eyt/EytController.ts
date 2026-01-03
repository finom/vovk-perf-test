import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyts")
export default class EytController {
  @operation({
    summary: "Get Eyts",
  })
  @get()
  static getEyts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyt",
  })
  @post("{id}")
  static createEyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
