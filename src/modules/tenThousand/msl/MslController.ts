import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msl")
export default class MslController {
  @operation({
    summary: "Get Msl",
  })
  @get()
  static getMsl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msl",
  })
  @post("{id}")
  static createMsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
