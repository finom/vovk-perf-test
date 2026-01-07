import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awd")
export default class AwdController {
  @operation({
    summary: "Get Awd",
  })
  @get()
  static getAwd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awd",
  })
  @post("{id}")
  static createAwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
