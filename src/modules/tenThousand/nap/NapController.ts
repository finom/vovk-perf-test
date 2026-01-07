import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nap")
export default class NapController {
  @operation({
    summary: "Get Nap",
  })
  @get()
  static getNap = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nap",
  })
  @post("{id}")
  static createNap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
