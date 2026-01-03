import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bazs")
export default class BazController {
  @operation({
    summary: "Get Bazs",
  })
  @get()
  static getBazs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Baz",
  })
  @post("{id}")
  static createBaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
