import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqus")
export default class AquController {
  @operation({
    summary: "Get Aqus",
  })
  @get()
  static getAqus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqu",
  })
  @post("{id}")
  static createAqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
