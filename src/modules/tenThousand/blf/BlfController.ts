import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blves")
export default class BlfController {
  @operation({
    summary: "Get Blves",
  })
  @get()
  static getBlves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blf",
  })
  @post("{id}")
  static createBlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
