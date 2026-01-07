import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqu")
export default class AquController {
  @operation({
    summary: "Get Aqu",
  })
  @get()
  static getAqu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqu",
  })
  @post("{id}")
  static createAqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
