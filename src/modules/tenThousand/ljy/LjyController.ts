import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljies")
export default class LjyController {
  @operation({
    summary: "Get Ljies",
  })
  @get()
  static getLjies = procedure({
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
