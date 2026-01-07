import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jat")
export default class JatController {
  @operation({
    summary: "Get Jat",
  })
  @get()
  static getJat = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jat",
  })
  @post("{id}")
  static createJat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
