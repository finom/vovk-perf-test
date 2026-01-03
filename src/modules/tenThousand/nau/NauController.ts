import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naus")
export default class NauController {
  @operation({
    summary: "Get Naus",
  })
  @get()
  static getNaus = procedure({
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
