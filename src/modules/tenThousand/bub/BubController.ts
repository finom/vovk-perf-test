import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bub")
export default class BubController {
  @operation({
    summary: "Get Bub",
  })
  @get()
  static getBub = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bub",
  })
  @post("{id}")
  static createBub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
