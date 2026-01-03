import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlds")
export default class NldController {
  @operation({
    summary: "Get Nlds",
  })
  @get()
  static getNlds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nld",
  })
  @post("{id}")
  static createNld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
