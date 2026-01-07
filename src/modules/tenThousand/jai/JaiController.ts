import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jai")
export default class JaiController {
  @operation({
    summary: "Get Jai",
  })
  @get()
  static getJai = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jai",
  })
  @post("{id}")
  static createJai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
