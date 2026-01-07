import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmw")
export default class LmwController {
  @operation({
    summary: "Get Lmw",
  })
  @get()
  static getLmw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmw",
  })
  @post("{id}")
  static createLmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
