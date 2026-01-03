import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hejs")
export default class HejController {
  @operation({
    summary: "Get Hejs",
  })
  @get()
  static getHejs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hej",
  })
  @post("{id}")
  static createHej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
