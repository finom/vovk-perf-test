import { procedure, prefix, get, post, operation } from "vovk";

@prefix("es")
export default class EsController {
  @operation({
    summary: "Get Es",
  })
  @get()
  static getEs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Es",
  })
  @post("{id}")
  static createEs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
