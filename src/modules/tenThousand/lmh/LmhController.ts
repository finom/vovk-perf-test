import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmh")
export default class LmhController {
  @operation({
    summary: "Get Lmh",
  })
  @get()
  static getLmh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmh",
  })
  @post("{id}")
  static createLmh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
