import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hum")
export default class HumController {
  @operation({
    summary: "Get Hum",
  })
  @get()
  static getHum = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hum",
  })
  @post("{id}")
  static createHum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
