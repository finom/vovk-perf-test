import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvc")
export default class FvcController {
  @operation({
    summary: "Get Fvc",
  })
  @get()
  static getFvc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvc",
  })
  @post("{id}")
  static createFvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
