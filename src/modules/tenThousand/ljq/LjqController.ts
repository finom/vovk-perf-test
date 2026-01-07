import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljq")
export default class LjqController {
  @operation({
    summary: "Get Ljq",
  })
  @get()
  static getLjq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljq",
  })
  @post("{id}")
  static createLjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
