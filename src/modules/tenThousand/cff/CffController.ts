import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cff")
export default class CffController {
  @operation({
    summary: "Get Cff",
  })
  @get()
  static getCff = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cff",
  })
  @post("{id}")
  static createCff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
