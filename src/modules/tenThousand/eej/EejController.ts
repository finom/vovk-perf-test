import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eejs")
export default class EejController {
  @operation({
    summary: "Get Eejs",
  })
  @get()
  static getEejs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eej",
  })
  @post("{id}")
  static createEej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
