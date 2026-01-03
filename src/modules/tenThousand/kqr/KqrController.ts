import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqrs")
export default class KqrController {
  @operation({
    summary: "Get Kqrs",
  })
  @get()
  static getKqrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqr",
  })
  @post("{id}")
  static createKqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
