import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nggs")
export default class NggController {
  @operation({
    summary: "Get Nggs",
  })
  @get()
  static getNggs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngg",
  })
  @post("{id}")
  static createNgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
