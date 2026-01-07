import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abr")
export default class AbrController {
  @operation({
    summary: "Get Abr",
  })
  @get()
  static getAbr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abr",
  })
  @post("{id}")
  static createAbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
