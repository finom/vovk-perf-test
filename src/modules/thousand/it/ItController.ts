import { procedure, prefix, get, post, operation } from "vovk";

@prefix("it")
export default class ItController {
  @operation({
    summary: "Get It",
  })
  @get()
  static getIt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create It",
  })
  @post("{id}")
  static createIt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
