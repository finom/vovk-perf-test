import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggy")
export default class GgyController {
  @operation({
    summary: "Get Ggy",
  })
  @get()
  static getGgy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggy",
  })
  @post("{id}")
  static createGgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
