import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpe")
export default class JpeController {
  @operation({
    summary: "Get Jpe",
  })
  @get()
  static getJpe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpe",
  })
  @post("{id}")
  static createJpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
