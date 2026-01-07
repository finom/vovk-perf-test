import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jda")
export default class JdaController {
  @operation({
    summary: "Get Jda",
  })
  @get()
  static getJda = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jda",
  })
  @post("{id}")
  static createJda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
