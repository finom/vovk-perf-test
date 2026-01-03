import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htrs")
export default class HtrController {
  @operation({
    summary: "Get Htrs",
  })
  @get()
  static getHtrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htr",
  })
  @post("{id}")
  static createHtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
