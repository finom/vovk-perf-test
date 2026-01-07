import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxt")
export default class BxtController {
  @operation({
    summary: "Get Bxt",
  })
  @get()
  static getBxt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxt",
  })
  @post("{id}")
  static createBxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
