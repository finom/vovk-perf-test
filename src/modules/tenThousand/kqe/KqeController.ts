import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqes")
export default class KqeController {
  @operation({
    summary: "Get Kqes",
  })
  @get()
  static getKqes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqe",
  })
  @post("{id}")
  static createKqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
