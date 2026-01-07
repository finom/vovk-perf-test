import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cye")
export default class CyeController {
  @operation({
    summary: "Get Cye",
  })
  @get()
  static getCye = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cye",
  })
  @post("{id}")
  static createCye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
