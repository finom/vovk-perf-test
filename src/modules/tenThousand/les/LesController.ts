import { procedure, prefix, get, post, operation } from "vovk";

@prefix("les")
export default class LesController {
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
    summary: "Create Les",
  })
  @post("{id}")
  static createLes = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
