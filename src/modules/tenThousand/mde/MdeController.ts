import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdes")
export default class MdeController {
  @operation({
    summary: "Get Mdes",
  })
  @get()
  static getMdes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mde",
  })
  @post("{id}")
  static createMde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
