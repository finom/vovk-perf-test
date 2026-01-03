import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nps")
export default class NpController {
  @operation({
    summary: "Get Nps",
  })
  @get()
  static getNps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Np",
  })
  @post("{id}")
  static createNp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
