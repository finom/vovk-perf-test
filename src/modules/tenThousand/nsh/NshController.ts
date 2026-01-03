import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nshes")
export default class NshController {
  @operation({
    summary: "Get Nshes",
  })
  @get()
  static getNshes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsh",
  })
  @post("{id}")
  static createNsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
