import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agh")
export default class AghController {
  @operation({
    summary: "Get Agh",
  })
  @get()
  static getAgh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agh",
  })
  @post("{id}")
  static createAgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
