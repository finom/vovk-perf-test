import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aihs")
export default class AihController {
  @operation({
    summary: "Get Aihs",
  })
  @get()
  static getAihs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aih",
  })
  @post("{id}")
  static createAih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
