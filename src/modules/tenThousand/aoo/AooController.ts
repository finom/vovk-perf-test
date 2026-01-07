import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoo")
export default class AooController {
  @operation({
    summary: "Get Aoo",
  })
  @get()
  static getAoo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aoo",
  })
  @post("{id}")
  static createAoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
