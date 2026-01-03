import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itqs")
export default class ItqController {
  @operation({
    summary: "Get Itqs",
  })
  @get()
  static getItqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itq",
  })
  @post("{id}")
  static createItq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
