import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fm")
export default class FmController {
  @operation({
    summary: "Get Fm",
  })
  @get()
  static getFm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fm",
  })
  @post("{id}")
  static createFm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
