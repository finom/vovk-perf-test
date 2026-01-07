import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apg")
export default class ApgController {
  @operation({
    summary: "Get Apg",
  })
  @get()
  static getApg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apg",
  })
  @post("{id}")
  static createApg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
