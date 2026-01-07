import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jld")
export default class JldController {
  @operation({
    summary: "Get Jld",
  })
  @get()
  static getJld = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jld",
  })
  @post("{id}")
  static createJld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
