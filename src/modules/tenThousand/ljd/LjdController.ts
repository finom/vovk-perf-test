import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljd")
export default class LjdController {
  @operation({
    summary: "Get Ljd",
  })
  @get()
  static getLjd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljd",
  })
  @post("{id}")
  static createLjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
