import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lues")
export default class LueController {
  @operation({
    summary: "Get Lues",
  })
  @get()
  static getLues = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lue",
  })
  @post("{id}")
  static createLue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
