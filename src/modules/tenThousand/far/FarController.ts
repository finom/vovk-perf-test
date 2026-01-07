import { procedure, prefix, get, post, operation } from "vovk";

@prefix("far")
export default class FarController {
  @operation({
    summary: "Get Far",
  })
  @get()
  static getFar = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Far",
  })
  @post("{id}")
  static createFar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
