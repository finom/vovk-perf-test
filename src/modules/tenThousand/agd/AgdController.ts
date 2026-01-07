import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agd")
export default class AgdController {
  @operation({
    summary: "Get Agd",
  })
  @get()
  static getAgd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agd",
  })
  @post("{id}")
  static createAgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
