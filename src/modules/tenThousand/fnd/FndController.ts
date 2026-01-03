import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnds")
export default class FndController {
  @operation({
    summary: "Get Fnds",
  })
  @get()
  static getFnds = procedure({
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
