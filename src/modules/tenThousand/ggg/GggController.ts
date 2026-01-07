import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggg")
export default class GggController {
  @operation({
    summary: "Get Ggg",
  })
  @get()
  static getGgg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggg",
  })
  @post("{id}")
  static createGgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
