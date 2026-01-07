import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dig")
export default class DigController {
  @operation({
    summary: "Get Dig",
  })
  @get()
  static getDig = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dig",
  })
  @post("{id}")
  static createDig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
