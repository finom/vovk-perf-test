import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgl")
export default class HglController {
  @operation({
    summary: "Get Hgl",
  })
  @get()
  static getHgl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgl",
  })
  @post("{id}")
  static createHgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
