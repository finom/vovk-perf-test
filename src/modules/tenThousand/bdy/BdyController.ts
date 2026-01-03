import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdies")
export default class BdyController {
  @operation({
    summary: "Get Bdies",
  })
  @get()
  static getBdies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdy",
  })
  @post("{id}")
  static createBdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
