import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhq")
export default class DhqController {
  @operation({
    summary: "Get Dhq",
  })
  @get()
  static getDhq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhq",
  })
  @post("{id}")
  static createDhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
