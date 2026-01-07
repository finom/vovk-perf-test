import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avr")
export default class AvrController {
  @operation({
    summary: "Get Avr",
  })
  @get()
  static getAvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avr",
  })
  @post("{id}")
  static createAvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
