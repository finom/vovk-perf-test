import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aits")
export default class AitController {
  @operation({
    summary: "Get Aits",
  })
  @get()
  static getAits = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ait",
  })
  @post("{id}")
  static createAit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
