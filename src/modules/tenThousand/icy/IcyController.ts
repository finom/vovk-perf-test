import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icy")
export default class IcyController {
  @operation({
    summary: "Get Icy",
  })
  @get()
  static getIcy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icy",
  })
  @post("{id}")
  static createIcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
