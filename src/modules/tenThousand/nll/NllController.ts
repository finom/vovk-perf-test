import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlls")
export default class NllController {
  @operation({
    summary: "Get Nlls",
  })
  @get()
  static getNlls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nll",
  })
  @post("{id}")
  static createNll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
