import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nll")
export default class NllController {
  @operation({
    summary: "Get Nll",
  })
  @get()
  static getNll = procedure({
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
