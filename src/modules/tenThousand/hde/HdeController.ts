import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdes")
export default class HdeController {
  @operation({
    summary: "Get Hdes",
  })
  @get()
  static getHdes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hde",
  })
  @post("{id}")
  static createHde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
