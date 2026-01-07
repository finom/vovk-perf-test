import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyo")
export default class GyoController {
  @operation({
    summary: "Get Gyo",
  })
  @get()
  static getGyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyo",
  })
  @post("{id}")
  static createGyo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
