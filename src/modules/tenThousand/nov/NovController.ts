import { procedure, prefix, get, post, operation } from "vovk";

@prefix("novs")
export default class NovController {
  @operation({
    summary: "Get Novs",
  })
  @get()
  static getNovs = procedure({
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
