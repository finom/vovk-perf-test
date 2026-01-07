import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dy")
export default class DyController {
  @operation({
    summary: "Get Dy",
  })
  @get()
  static getDy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dy",
  })
  @post("{id}")
  static createDy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
