import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaw")
export default class EawController {
  @operation({
    summary: "Get Eaw",
  })
  @get()
  static getEaw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eaw",
  })
  @post("{id}")
  static createEaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
