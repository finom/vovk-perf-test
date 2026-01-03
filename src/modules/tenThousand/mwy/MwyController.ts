import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwies")
export default class MwyController {
  @operation({
    summary: "Get Mwies",
  })
  @get()
  static getMwies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwy",
  })
  @post("{id}")
  static createMwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
