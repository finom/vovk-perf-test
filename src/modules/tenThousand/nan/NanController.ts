import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nan")
export default class NanController {
  @operation({
    summary: "Get Nan",
  })
  @get()
  static getNan = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nan",
  })
  @post("{id}")
  static createNan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
