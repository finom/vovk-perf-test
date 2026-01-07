import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyp")
export default class FypController {
  @operation({
    summary: "Get Fyp",
  })
  @get()
  static getFyp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyp",
  })
  @post("{id}")
  static createFyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
