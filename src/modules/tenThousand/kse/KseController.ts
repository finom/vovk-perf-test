import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kses")
export default class KseController {
  @operation({
    summary: "Get Kses",
  })
  @get()
  static getKses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kse",
  })
  @post("{id}")
  static createKse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
