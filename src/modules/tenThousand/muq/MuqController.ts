import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muq")
export default class MuqController {
  @operation({
    summary: "Get Muq",
  })
  @get()
  static getMuq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muq",
  })
  @post("{id}")
  static createMuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
