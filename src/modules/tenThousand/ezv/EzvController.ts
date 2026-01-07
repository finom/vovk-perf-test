import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezv")
export default class EzvController {
  @operation({
    summary: "Get Ezv",
  })
  @get()
  static getEzv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezv",
  })
  @post("{id}")
  static createEzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
