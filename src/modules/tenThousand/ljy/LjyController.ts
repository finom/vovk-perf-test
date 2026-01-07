import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljy")
export default class LjyController {
  @operation({
    summary: "Get Ljy",
  })
  @get()
  static getLjy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljy",
  })
  @post("{id}")
  static createLjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
