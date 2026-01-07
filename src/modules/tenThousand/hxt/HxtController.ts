import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxt")
export default class HxtController {
  @operation({
    summary: "Get Hxt",
  })
  @get()
  static getHxt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxt",
  })
  @post("{id}")
  static createHxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
