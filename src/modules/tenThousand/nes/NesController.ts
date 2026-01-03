import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nes")
export default class NesController {
  @operation({
    summary: "Get Nes",
  })
  @get()
  static getNes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nes",
  })
  @post("{id}")
  static createNes = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
