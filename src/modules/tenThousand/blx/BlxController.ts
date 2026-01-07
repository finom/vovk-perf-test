import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blx")
export default class BlxController {
  @operation({
    summary: "Get Blx",
  })
  @get()
  static getBlx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blx",
  })
  @post("{id}")
  static createBlx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
