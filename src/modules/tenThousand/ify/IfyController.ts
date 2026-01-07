import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ify")
export default class IfyController {
  @operation({
    summary: "Get Ify",
  })
  @get()
  static getIfy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ify",
  })
  @post("{id}")
  static createIfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
