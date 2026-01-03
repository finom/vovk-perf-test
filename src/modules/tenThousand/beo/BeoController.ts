import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beos")
export default class BeoController {
  @operation({
    summary: "Get Beos",
  })
  @get()
  static getBeos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Beo",
  })
  @post("{id}")
  static createBeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
