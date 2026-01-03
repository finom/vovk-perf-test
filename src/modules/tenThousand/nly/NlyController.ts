import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlies")
export default class NlyController {
  @operation({
    summary: "Get Nlies",
  })
  @get()
  static getNlies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nly",
  })
  @post("{id}")
  static createNly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
