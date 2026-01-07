import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvh")
export default class HvhController {
  @operation({
    summary: "Get Hvh",
  })
  @get()
  static getHvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvh",
  })
  @post("{id}")
  static createHvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
