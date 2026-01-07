import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ear")
export default class EarController {
  @operation({
    summary: "Get Ear",
  })
  @get()
  static getEar = procedure({
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
