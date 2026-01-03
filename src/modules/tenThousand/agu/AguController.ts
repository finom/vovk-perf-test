import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agus")
export default class AguController {
  @operation({
    summary: "Get Agus",
  })
  @get()
  static getAgus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agu",
  })
  @post("{id}")
  static createAgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
