import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iix")
export default class IixController {
  @operation({
    summary: "Get Iix",
  })
  @get()
  static getIix = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iix",
  })
  @post("{id}")
  static createIix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
