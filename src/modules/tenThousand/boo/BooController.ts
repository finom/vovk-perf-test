import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boo")
export default class BooController {
  @operation({
    summary: "Get Boo",
  })
  @get()
  static getBoo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boo",
  })
  @post("{id}")
  static createBoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
