import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hj")
export default class HjController {
  @operation({
    summary: "Get Hj",
  })
  @get()
  static getHj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hj",
  })
  @post("{id}")
  static createHj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
