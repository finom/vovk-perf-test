import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsd")
export default class FsdController {
  @operation({
    summary: "Get Fsd",
  })
  @get()
  static getFsd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsd",
  })
  @post("{id}")
  static createFsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
