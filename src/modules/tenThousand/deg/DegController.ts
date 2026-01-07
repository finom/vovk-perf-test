import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deg")
export default class DegController {
  @operation({
    summary: "Get Deg",
  })
  @get()
  static getDeg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Deg",
  })
  @post("{id}")
  static createDeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
