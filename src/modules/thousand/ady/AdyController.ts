import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adies")
export default class AdyController {
  @operation({
    summary: "Get Adies",
  })
  @get()
  static getAdies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ady",
  })
  @post("{id}")
  static createAdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
