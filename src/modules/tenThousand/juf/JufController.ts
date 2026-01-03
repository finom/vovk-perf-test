import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jufs")
export default class JufController {
  @operation({
    summary: "Get Jufs",
  })
  @get()
  static getJufs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juf",
  })
  @post("{id}")
  static createJuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
