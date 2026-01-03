import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivjs")
export default class IvjController {
  @operation({
    summary: "Get Ivjs",
  })
  @get()
  static getIvjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivj",
  })
  @post("{id}")
  static createIvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
