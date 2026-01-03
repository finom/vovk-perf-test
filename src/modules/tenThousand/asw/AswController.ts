import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asws")
export default class AswController {
  @operation({
    summary: "Get Asws",
  })
  @get()
  static getAsws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asw",
  })
  @post("{id}")
  static createAsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
