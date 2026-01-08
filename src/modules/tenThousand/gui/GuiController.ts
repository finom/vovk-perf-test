import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
