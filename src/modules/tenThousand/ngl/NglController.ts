import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngl")
export default class NglController {
  @operation({
    summary: "Get Ngl",
  })
  @get()
  static getNgl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngl",
  })
  @post("{id}")
  static createNgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
