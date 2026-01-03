import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlds")
export default class JldController {
  @operation({
    summary: "Get Jlds",
  })
  @get()
  static getJlds = procedure({
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
