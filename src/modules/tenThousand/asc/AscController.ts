import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asc")
export default class AscController {
  @operation({
    summary: "Get Asc",
  })
  @get()
  static getAsc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asc",
  })
  @post("{id}")
  static createAsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
