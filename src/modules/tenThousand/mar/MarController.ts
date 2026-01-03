import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mars")
export default class MarController {
  @operation({
    summary: "Get Mars",
  })
  @get()
  static getMars = procedure({
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
