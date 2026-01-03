import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gggs")
export default class GggController {
  @operation({
    summary: "Get Gggs",
  })
  @get()
  static getGggs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggg",
  })
  @post("{id}")
  static createGgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
