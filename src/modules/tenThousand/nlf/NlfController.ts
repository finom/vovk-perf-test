import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlves")
export default class NlfController {
  @operation({
    summary: "Get Nlves",
  })
  @get()
  static getNlves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlf",
  })
  @post("{id}")
  static createNlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
