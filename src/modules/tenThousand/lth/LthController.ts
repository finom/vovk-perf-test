import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lth")
export default class LthController {
  @operation({
    summary: "Get Lth",
  })
  @get()
  static getLth = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lth",
  })
  @post("{id}")
  static createLth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
