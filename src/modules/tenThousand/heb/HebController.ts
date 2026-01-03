import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hebs")
export default class HebController {
  @operation({
    summary: "Get Hebs",
  })
  @get()
  static getHebs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Heb",
  })
  @post("{id}")
  static createHeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
