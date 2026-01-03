import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmzs")
export default class LmzController {
  @operation({
    summary: "Get Lmzs",
  })
  @get()
  static getLmzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmz",
  })
  @post("{id}")
  static createLmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
