import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsk")
export default class JskController {
  @operation({
    summary: "Get Jsk",
  })
  @get()
  static getJsk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsk",
  })
  @post("{id}")
  static createJsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
