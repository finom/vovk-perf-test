import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sw")
export default class SwController {
  @operation({
    summary: "Get Sw",
  })
  @get()
  static getSw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sw",
  })
  @post("{id}")
  static createSw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
