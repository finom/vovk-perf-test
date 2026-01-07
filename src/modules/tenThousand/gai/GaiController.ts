import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gai")
export default class GaiController {
  @operation({
    summary: "Get Gai",
  })
  @get()
  static getGai = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gai",
  })
  @post("{id}")
  static createGai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
