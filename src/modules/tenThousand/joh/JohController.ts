import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joh")
export default class JohController {
  @operation({
    summary: "Get Joh",
  })
  @get()
  static getJoh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Joh",
  })
  @post("{id}")
  static createJoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
