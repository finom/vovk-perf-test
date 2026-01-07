import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imj")
export default class ImjController {
  @operation({
    summary: "Get Imj",
  })
  @get()
  static getImj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imj",
  })
  @post("{id}")
  static createImj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
