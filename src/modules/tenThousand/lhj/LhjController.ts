import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhj")
export default class LhjController {
  @operation({
    summary: "Get Lhj",
  })
  @get()
  static getLhj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhj",
  })
  @post("{id}")
  static createLhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
