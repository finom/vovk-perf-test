import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aags")
export default class AagController {
  @operation({
    summary: "Get Aags",
  })
  @get()
  static getAags = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aag",
  })
  @post("{id}")
  static createAag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
