import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljds")
export default class LjdController {
  @operation({
    summary: "Get Ljds",
  })
  @get()
  static getLjds = procedure({
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
