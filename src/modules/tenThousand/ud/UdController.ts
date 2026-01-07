import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ud")
export default class UdController {
  @operation({
    summary: "Get Ud",
  })
  @get()
  static getUd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ud",
  })
  @post("{id}")
  static createUd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
