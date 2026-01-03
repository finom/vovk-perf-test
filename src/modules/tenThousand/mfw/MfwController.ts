import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfws")
export default class MfwController {
  @operation({
    summary: "Get Mfws",
  })
  @get()
  static getMfws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfw",
  })
  @post("{id}")
  static createMfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
