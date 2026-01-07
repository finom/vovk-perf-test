import { procedure, prefix, get, post, operation } from "vovk";

@prefix("of")
export default class OfController {
  @operation({
    summary: "Get Of",
  })
  @get()
  static getOf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Of",
  })
  @post("{id}")
  static createOf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
