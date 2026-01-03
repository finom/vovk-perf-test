import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdos")
export default class JdoController {
  @operation({
    summary: "Get Jdos",
  })
  @get()
  static getJdos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdo",
  })
  @post("{id}")
  static createJdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
