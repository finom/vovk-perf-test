import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnh")
export default class HnhController {
  @operation({
    summary: "Get Hnh",
  })
  @get()
  static getHnh = procedure({
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
