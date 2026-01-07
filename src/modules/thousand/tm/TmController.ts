import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tm")
export default class TmController {
  @operation({
    summary: "Get Tm",
  })
  @get()
  static getTm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tm",
  })
  @post("{id}")
  static createTm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
