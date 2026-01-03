import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyxes")
export default class EyxController {
  @operation({
    summary: "Get Eyxes",
  })
  @get()
  static getEyxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyx",
  })
  @post("{id}")
  static createEyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
