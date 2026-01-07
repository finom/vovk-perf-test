import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahj")
export default class AhjController {
  @operation({
    summary: "Get Ahj",
  })
  @get()
  static getAhj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahj",
  })
  @post("{id}")
  static createAhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
