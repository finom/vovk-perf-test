import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elh")
export default class ElhController {
  @operation({
    summary: "Get Elh",
  })
  @get()
  static getElh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elh",
  })
  @post("{id}")
  static createElh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
