import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljrs")
export default class LjrController {
  @operation({
    summary: "Get Ljrs",
  })
  @get()
  static getLjrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljr",
  })
  @post("{id}")
  static createLjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
