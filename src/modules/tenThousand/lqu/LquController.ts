import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqus")
export default class LquController {
  @operation({
    summary: "Get Lqus",
  })
  @get()
  static getLqus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqu",
  })
  @post("{id}")
  static createLqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
