import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jues")
export default class JueController {
  @operation({
    summary: "Get Jues",
  })
  @get()
  static getJues = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jue",
  })
  @post("{id}")
  static createJue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
