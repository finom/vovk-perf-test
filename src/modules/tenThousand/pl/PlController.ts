import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pl")
export default class PlController {
  @operation({
    summary: "Get Pl",
  })
  @get()
  static getPl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pl",
  })
  @post("{id}")
  static createPl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
