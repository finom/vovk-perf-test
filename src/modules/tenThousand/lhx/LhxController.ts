import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhx")
export default class LhxController {
  @operation({
    summary: "Get Lhx",
  })
  @get()
  static getLhx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhx",
  })
  @post("{id}")
  static createLhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
