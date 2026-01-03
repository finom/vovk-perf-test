import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjos")
export default class HjoController {
  @operation({
    summary: "Get Hjos",
  })
  @get()
  static getHjos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjo",
  })
  @post("{id}")
  static createHjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
