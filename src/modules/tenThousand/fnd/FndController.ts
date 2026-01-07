import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnd")
export default class FndController {
  @operation({
    summary: "Get Fnd",
  })
  @get()
  static getFnd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnd",
  })
  @post("{id}")
  static createFnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
