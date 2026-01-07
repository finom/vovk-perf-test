import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esd")
export default class EsdController {
  @operation({
    summary: "Get Esd",
  })
  @get()
  static getEsd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esd",
  })
  @post("{id}")
  static createEsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
