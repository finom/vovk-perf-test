import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asq")
export default class AsqController {
  @operation({
    summary: "Get Asq",
  })
  @get()
  static getAsq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asq",
  })
  @post("{id}")
  static createAsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
