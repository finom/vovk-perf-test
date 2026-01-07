import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exn")
export default class ExnController {
  @operation({
    summary: "Get Exn",
  })
  @get()
  static getExn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exn",
  })
  @post("{id}")
  static createExn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
