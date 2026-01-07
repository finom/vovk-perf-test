import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faz")
export default class FazController {
  @operation({
    summary: "Get Faz",
  })
  @get()
  static getFaz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Faz",
  })
  @post("{id}")
  static createFaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
