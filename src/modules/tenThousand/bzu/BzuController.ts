import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzu")
export default class BzuController {
  @operation({
    summary: "Get Bzu",
  })
  @get()
  static getBzu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzu",
  })
  @post("{id}")
  static createBzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
