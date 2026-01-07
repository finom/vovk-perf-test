import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivo")
export default class IvoController {
  @operation({
    summary: "Get Ivo",
  })
  @get()
  static getIvo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivo",
  })
  @post("{id}")
  static createIvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
