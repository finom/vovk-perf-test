import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhn")
export default class JhnController {
  @operation({
    summary: "Get Jhn",
  })
  @get()
  static getJhn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhn",
  })
  @post("{id}")
  static createJhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
