import { procedure, prefix, get, post, operation } from "vovk";

@prefix("les")
export default class LeController {
  @operation({
    summary: "Get Les",
  })
  @get()
  static getLes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Le",
  })
  @post("{id}")
  static createLe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
