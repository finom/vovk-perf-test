import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awl")
export default class AwlController {
  @operation({
    summary: "Get Awl",
  })
  @get()
  static getAwl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awl",
  })
  @post("{id}")
  static createAwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
