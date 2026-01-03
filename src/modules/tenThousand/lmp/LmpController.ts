import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmps")
export default class LmpController {
  @operation({
    summary: "Get Lmps",
  })
  @get()
  static getLmps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmp",
  })
  @post("{id}")
  static createLmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
