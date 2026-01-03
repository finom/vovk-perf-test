import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvos")
export default class JvoController {
  @operation({
    summary: "Get Jvos",
  })
  @get()
  static getJvos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvo",
  })
  @post("{id}")
  static createJvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
