import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lov")
export default class LovController {
  @operation({
    summary: "Get Lov",
  })
  @get()
  static getLov = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lov",
  })
  @post("{id}")
  static createLov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
