import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afies")
export default class AfyController {
  @operation({
    summary: "Get Afies",
  })
  @get()
  static getAfies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afy",
  })
  @post("{id}")
  static createAfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
