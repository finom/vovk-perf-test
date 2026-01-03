import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jocs")
export default class JocController {
  @operation({
    summary: "Get Jocs",
  })
  @get()
  static getJocs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Joc",
  })
  @post("{id}")
  static createJoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
