import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hum")
export default class HumController {
  @operation({
    summary: "Get Hum",
  })
  @get()
  static getHum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hum",
  })
  @post("{id}")
  static createHum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
