import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jafs")
export default class JafController {
  @operation({
    summary: "Get Jafs",
  })
  @get()
  static getJafs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jaf",
  })
  @post("{id}")
  static createJaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
