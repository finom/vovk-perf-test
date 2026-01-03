import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjds")
export default class JjdController {
  @operation({
    summary: "Get Jjds",
  })
  @get()
  static getJjds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjd",
  })
  @post("{id}")
  static createJjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
