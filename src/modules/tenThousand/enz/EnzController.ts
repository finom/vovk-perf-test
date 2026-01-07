import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enz")
export default class EnzController {
  @operation({
    summary: "Get Enz",
  })
  @get()
  static getEnz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enz",
  })
  @post("{id}")
  static createEnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
