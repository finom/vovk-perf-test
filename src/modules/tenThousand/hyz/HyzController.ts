import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyz")
export default class HyzController {
  @operation({
    summary: "Get Hyz",
  })
  @get()
  static getHyz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyz",
  })
  @post("{id}")
  static createHyz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
