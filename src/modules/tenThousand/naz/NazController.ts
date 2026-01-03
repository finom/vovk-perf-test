import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nazs")
export default class NazController {
  @operation({
    summary: "Get Nazs",
  })
  @get()
  static getNazs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Naz",
  })
  @post("{id}")
  static createNaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
