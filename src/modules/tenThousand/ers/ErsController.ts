import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ers")
export default class ErsController {
  @operation({
    summary: "Get Ers",
  })
  @get()
  static getErs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ers",
  })
  @post("{id}")
  static createErs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
