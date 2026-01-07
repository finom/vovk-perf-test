import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ele")
export default class EleController {
  @operation({
    summary: "Get Ele",
  })
  @get()
  static getEle = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ele",
  })
  @post("{id}")
  static createEle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
