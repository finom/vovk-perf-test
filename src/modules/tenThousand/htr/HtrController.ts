import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htr")
export default class HtrController {
  @operation({
    summary: "Get Htr",
  })
  @get()
  static getHtr = procedure({
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
