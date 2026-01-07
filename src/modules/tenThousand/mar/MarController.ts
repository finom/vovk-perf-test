import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mar")
export default class MarController {
  @operation({
    summary: "Get Mar",
  })
  @get()
  static getMar = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mar",
  })
  @post("{id}")
  static createMar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
