import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nau")
export default class NauController {
  @operation({
    summary: "Get Nau",
  })
  @get()
  static getNau = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nau",
  })
  @post("{id}")
  static createNau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
