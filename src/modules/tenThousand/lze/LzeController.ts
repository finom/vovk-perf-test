import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzes")
export default class LzeController {
  @operation({
    summary: "Get Lzes",
  })
  @get()
  static getLzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lze",
  })
  @post("{id}")
  static createLze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
