import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moxen")
export default class MoxController {
  @operation({
    summary: "Get Moxen",
  })
  @get()
  static getMoxen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mox",
  })
  @post("{id}")
  static createMox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
