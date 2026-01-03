import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzes")
export default class DzeController {
  @operation({
    summary: "Get Dzes",
  })
  @get()
  static getDzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dze",
  })
  @post("{id}")
  static createDze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
