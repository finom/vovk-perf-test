import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cok")
export default class CokController {
  @operation({
    summary: "Get Cok",
  })
  @get()
  static getCok = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cok",
  })
  @post("{id}")
  static createCok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
