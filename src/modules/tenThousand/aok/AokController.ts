import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aok")
export default class AokController {
  @operation({
    summary: "Get Aok",
  })
  @get()
  static getAok = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aok",
  })
  @post("{id}")
  static createAok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
