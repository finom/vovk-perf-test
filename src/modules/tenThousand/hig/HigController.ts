import { procedure, prefix, get, post, operation } from "vovk";

@prefix("higs")
export default class HigController {
  @operation({
    summary: "Get Higs",
  })
  @get()
  static getHigs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hig",
  })
  @post("{id}")
  static createHig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
