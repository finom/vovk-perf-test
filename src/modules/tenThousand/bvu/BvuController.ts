import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvu")
export default class BvuController {
  @operation({
    summary: "Get Bvu",
  })
  @get()
  static getBvu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvu",
  })
  @post("{id}")
  static createBvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
