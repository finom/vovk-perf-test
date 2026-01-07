import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsd")
export default class GsdController {
  @operation({
    summary: "Get Gsd",
  })
  @get()
  static getGsd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsd",
  })
  @post("{id}")
  static createGsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
