import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmls")
export default class NmlController {
  @operation({
    summary: "Get Nmls",
  })
  @get()
  static getNmls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nml",
  })
  @post("{id}")
  static createNml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
