import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inms")
export default class InmController {
  @operation({
    summary: "Get Inms",
  })
  @get()
  static getInms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inm",
  })
  @post("{id}")
  static createInm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
