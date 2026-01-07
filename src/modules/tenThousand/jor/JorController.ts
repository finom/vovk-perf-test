import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jor")
export default class JorController {
  @operation({
    summary: "Get Jor",
  })
  @get()
  static getJor = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jor",
  })
  @post("{id}")
  static createJor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
