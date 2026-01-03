import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npos")
export default class NpoController {
  @operation({
    summary: "Get Npos",
  })
  @get()
  static getNpos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npo",
  })
  @post("{id}")
  static createNpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
