import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dze")
export default class DzeController {
  @operation({
    summary: "Get Dze",
  })
  @get()
  static getDze = procedure({
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
