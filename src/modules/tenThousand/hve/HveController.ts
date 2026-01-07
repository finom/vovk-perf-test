import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hve")
export default class HveController {
  @operation({
    summary: "Get Hve",
  })
  @get()
  static getHve = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hve",
  })
  @post("{id}")
  static createHve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
