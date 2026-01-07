import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hau")
export default class HauController {
  @operation({
    summary: "Get Hau",
  })
  @get()
  static getHau = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hau",
  })
  @post("{id}")
  static createHau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
