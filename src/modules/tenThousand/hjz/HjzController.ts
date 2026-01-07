import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjz")
export default class HjzController {
  @operation({
    summary: "Get Hjz",
  })
  @get()
  static getHjz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjz",
  })
  @post("{id}")
  static createHjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
