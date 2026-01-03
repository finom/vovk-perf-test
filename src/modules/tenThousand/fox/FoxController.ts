import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foxen")
export default class FoxController {
  @operation({
    summary: "Get Foxen",
  })
  @get()
  static getFoxen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fox",
  })
  @post("{id}")
  static createFox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
