import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nov")
export default class NovController {
  @operation({
    summary: "Get Nov",
  })
  @get()
  static getNov = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nov",
  })
  @post("{id}")
  static createNov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
