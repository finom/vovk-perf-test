import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fggs")
export default class FggController {
  @operation({
    summary: "Get Fggs",
  })
  @get()
  static getFggs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgg",
  })
  @post("{id}")
  static createFgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
