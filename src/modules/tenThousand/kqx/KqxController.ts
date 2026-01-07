import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqx")
export default class KqxController {
  @operation({
    summary: "Get Kqx",
  })
  @get()
  static getKqx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqx",
  })
  @post("{id}")
  static createKqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
