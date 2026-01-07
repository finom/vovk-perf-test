import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asb")
export default class AsbController {
  @operation({
    summary: "Get Asb",
  })
  @get()
  static getAsb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asb",
  })
  @post("{id}")
  static createAsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
