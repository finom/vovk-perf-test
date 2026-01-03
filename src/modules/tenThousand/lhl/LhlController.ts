import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhls")
export default class LhlController {
  @operation({
    summary: "Get Lhls",
  })
  @get()
  static getLhls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhl",
  })
  @post("{id}")
  static createLhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
