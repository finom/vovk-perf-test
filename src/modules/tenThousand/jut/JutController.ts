import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juts")
export default class JutController {
  @operation({
    summary: "Get Juts",
  })
  @get()
  static getJuts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jut",
  })
  @post("{id}")
  static createJut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
