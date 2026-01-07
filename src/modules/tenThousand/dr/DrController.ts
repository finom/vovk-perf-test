import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dr")
export default class DrController {
  @operation({
    summary: "Get Dr",
  })
  @get()
  static getDr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dr",
  })
  @post("{id}")
  static createDr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
