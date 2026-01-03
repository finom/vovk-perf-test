import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jils")
export default class JilController {
  @operation({
    summary: "Get Jils",
  })
  @get()
  static getJils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jil",
  })
  @post("{id}")
  static createJil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
