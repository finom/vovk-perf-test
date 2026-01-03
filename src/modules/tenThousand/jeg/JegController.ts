import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jegs")
export default class JegController {
  @operation({
    summary: "Get Jegs",
  })
  @get()
  static getJegs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jeg",
  })
  @post("{id}")
  static createJeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
