import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnj")
export default class HnjController {
  @operation({
    summary: "Get Hnj",
  })
  @get()
  static getHnj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnj",
  })
  @post("{id}")
  static createHnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
