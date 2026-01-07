import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fk")
export default class FkController {
  @operation({
    summary: "Get Fk",
  })
  @get()
  static getFk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fk",
  })
  @post("{id}")
  static createFk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
