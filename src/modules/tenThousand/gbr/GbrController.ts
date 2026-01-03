import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbrs")
export default class GbrController {
  @operation({
    summary: "Get Gbrs",
  })
  @get()
  static getGbrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbr",
  })
  @post("{id}")
  static createGbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
