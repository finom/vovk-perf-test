import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnhs")
export default class HnhController {
  @operation({
    summary: "Get Hnhs",
  })
  @get()
  static getHnhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnh",
  })
  @post("{id}")
  static createHnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
