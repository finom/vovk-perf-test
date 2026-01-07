import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axt")
export default class AxtController {
  @operation({
    summary: "Get Axt",
  })
  @get()
  static getAxt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axt",
  })
  @post("{id}")
  static createAxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
