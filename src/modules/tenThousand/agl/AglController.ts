import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agls")
export default class AglController {
  @operation({
    summary: "Get Agls",
  })
  @get()
  static getAgls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agl",
  })
  @post("{id}")
  static createAgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
