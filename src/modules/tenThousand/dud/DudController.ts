import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dud")
export default class DudController {
  @operation({
    summary: "Get Dud",
  })
  @get()
  static getDud = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dud",
  })
  @post("{id}")
  static createDud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
