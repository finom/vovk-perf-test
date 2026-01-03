import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqis")
export default class MqiController {
  @operation({
    summary: "Get Mqis",
  })
  @get()
  static getMqis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqi",
  })
  @post("{id}")
  static createMqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
