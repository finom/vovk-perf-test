import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goo")
export default class GooController {
  @operation({
    summary: "Get Goo",
  })
  @get()
  static getGoo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Goo",
  })
  @post("{id}")
  static createGoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
