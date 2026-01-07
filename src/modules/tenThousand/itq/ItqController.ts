import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itq")
export default class ItqController {
  @operation({
    summary: "Get Itq",
  })
  @get()
  static getItq = procedure({
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
