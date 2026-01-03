import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahies")
export default class AhyController {
  @operation({
    summary: "Get Ahies",
  })
  @get()
  static getAhies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahy",
  })
  @post("{id}")
  static createAhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
