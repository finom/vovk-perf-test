import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itb")
export default class ItbController {
  @operation({
    summary: "Get Itb",
  })
  @get()
  static getItb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itb",
  })
  @post("{id}")
  static createItb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
