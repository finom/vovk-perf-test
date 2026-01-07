import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arl")
export default class ArlController {
  @operation({
    summary: "Get Arl",
  })
  @get()
  static getArl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arl",
  })
  @post("{id}")
  static createArl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
