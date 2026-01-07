import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfo")
export default class HfoController {
  @operation({
    summary: "Get Hfo",
  })
  @get()
  static getHfo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfo",
  })
  @post("{id}")
  static createHfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
