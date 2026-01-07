import { procedure, prefix, get, post, operation } from "vovk";

@prefix("np")
export default class NpController {
  @operation({
    summary: "Get Np",
  })
  @get()
  static getNp = procedure({
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
