import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jovs")
export default class JovController {
  @operation({
    summary: "Get Jovs",
  })
  @get()
  static getJovs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jov",
  })
  @post("{id}")
  static createJov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
