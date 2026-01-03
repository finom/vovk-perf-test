import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzos")
export default class JzoController {
  @operation({
    summary: "Get Jzos",
  })
  @get()
  static getJzos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzo",
  })
  @post("{id}")
  static createJzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
