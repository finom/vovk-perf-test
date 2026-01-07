import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyg")
export default class EygController {
  @operation({
    summary: "Get Eyg",
  })
  @get()
  static getEyg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyg",
  })
  @post("{id}")
  static createEyg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
