import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lee")
export default class LeeController {
  @operation({
    summary: "Get Lee",
  })
  @get()
  static getLee = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lee",
  })
  @post("{id}")
  static createLee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
