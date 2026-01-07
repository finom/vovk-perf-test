import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maq")
export default class MaqController {
  @operation({
    summary: "Get Maq",
  })
  @get()
  static getMaq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Maq",
  })
  @post("{id}")
  static createMaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
