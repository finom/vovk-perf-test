import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gui")
export default class GuiController {
  @operation({
    summary: "Get Gui",
  })
  @get()
  static getGui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gui",
  })
  @post("{id}")
  static createGui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
