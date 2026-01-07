import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeb")
export default class AebController {
  @operation({
    summary: "Get Aeb",
  })
  @get()
  static getAeb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aeb",
  })
  @post("{id}")
  static createAeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
