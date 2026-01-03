import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzes")
export default class MzeController {
  @operation({
    summary: "Get Mzes",
  })
  @get()
  static getMzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mze",
  })
  @post("{id}")
  static createMze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
