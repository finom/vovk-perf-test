import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddbs")
export default class DdbController {
  @operation({
    summary: "Get Ddbs",
  })
  @get()
  static getDdbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddb",
  })
  @post("{id}")
  static createDdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
