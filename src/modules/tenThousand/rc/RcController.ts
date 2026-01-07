import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rc")
export default class RcController {
  @operation({
    summary: "Get Rc",
  })
  @get()
  static getRc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rc",
  })
  @post("{id}")
  static createRc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
