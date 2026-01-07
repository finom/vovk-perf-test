import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guz")
export default class GuzController {
  @operation({
    summary: "Get Guz",
  })
  @get()
  static getGuz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guz",
  })
  @post("{id}")
  static createGuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
