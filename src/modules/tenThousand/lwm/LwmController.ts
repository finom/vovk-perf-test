import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwms")
export default class LwmController {
  @operation({
    summary: "Get Lwms",
  })
  @get()
  static getLwms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwm",
  })
  @post("{id}")
  static createLwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
