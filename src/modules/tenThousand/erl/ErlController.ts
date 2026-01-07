import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erl")
export default class ErlController {
  @operation({
    summary: "Get Erl",
  })
  @get()
  static getErl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erl",
  })
  @post("{id}")
  static createErl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
