import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hye")
export default class HyeController {
  @operation({
    summary: "Get Hye",
  })
  @get()
  static getHye = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hye",
  })
  @post("{id}")
  static createHye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
