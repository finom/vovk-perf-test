import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avrs")
export default class AvrController {
  @operation({
    summary: "Get Avrs",
  })
  @get()
  static getAvrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avr",
  })
  @post("{id}")
  static createAvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
