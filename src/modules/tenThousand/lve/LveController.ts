import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lve")
export default class LveController {
  @operation({
    summary: "Get Lve",
  })
  @get()
  static getLve = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lve",
  })
  @post("{id}")
  static createLve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
