import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eel")
export default class EelController {
  @operation({
    summary: "Get Eel",
  })
  @get()
  static getEel = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eel",
  })
  @post("{id}")
  static createEel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
