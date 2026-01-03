import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ears")
export default class EarController {
  @operation({
    summary: "Get Ears",
  })
  @get()
  static getEars = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ear",
  })
  @post("{id}")
  static createEar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
