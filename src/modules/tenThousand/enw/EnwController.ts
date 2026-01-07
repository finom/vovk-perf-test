import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enw")
export default class EnwController {
  @operation({
    summary: "Get Enw",
  })
  @get()
  static getEnw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enw",
  })
  @post("{id}")
  static createEnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
