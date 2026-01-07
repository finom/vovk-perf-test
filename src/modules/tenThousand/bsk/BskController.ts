import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsk")
export default class BskController {
  @operation({
    summary: "Get Bsk",
  })
  @get()
  static getBsk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsk",
  })
  @post("{id}")
  static createBsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
