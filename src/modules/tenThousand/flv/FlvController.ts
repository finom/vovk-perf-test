import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flv")
export default class FlvController {
  @operation({
    summary: "Get Flv",
  })
  @get()
  static getFlv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flv",
  })
  @post("{id}")
  static createFlv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
