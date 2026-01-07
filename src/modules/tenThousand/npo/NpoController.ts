import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npo")
export default class NpoController {
  @operation({
    summary: "Get Npo",
  })
  @get()
  static getNpo = procedure({
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
