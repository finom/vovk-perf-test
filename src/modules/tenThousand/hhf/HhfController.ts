import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhf")
export default class HhfController {
  @operation({
    summary: "Get Hhf",
  })
  @get()
  static getHhf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhf",
  })
  @post("{id}")
  static createHhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
