import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isr")
export default class IsrController {
  @operation({
    summary: "Get Isr",
  })
  @get()
  static getIsr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isr",
  })
  @post("{id}")
  static createIsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
