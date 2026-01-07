import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naw")
export default class NawController {
  @operation({
    summary: "Get Naw",
  })
  @get()
  static getNaw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Naw",
  })
  @post("{id}")
  static createNaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
