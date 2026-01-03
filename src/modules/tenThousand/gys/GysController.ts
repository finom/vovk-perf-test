import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gys")
export default class GysController {
  @operation({
    summary: "Get Gys",
  })
  @get()
  static getGys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gys",
  })
  @post("{id}")
  static createGys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
