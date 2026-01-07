import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asj")
export default class AsjController {
  @operation({
    summary: "Get Asj",
  })
  @get()
  static getAsj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asj",
  })
  @post("{id}")
  static createAsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
