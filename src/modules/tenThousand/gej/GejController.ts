import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gejs")
export default class GejController {
  @operation({
    summary: "Get Gejs",
  })
  @get()
  static getGejs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gej",
  })
  @post("{id}")
  static createGej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
