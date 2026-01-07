import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avu")
export default class AvuController {
  @operation({
    summary: "Get Avu",
  })
  @get()
  static getAvu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avu",
  })
  @post("{id}")
  static createAvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
