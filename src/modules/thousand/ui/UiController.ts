import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ui")
export default class UiController {
  @operation({
    summary: "Get Ui",
  })
  @get()
  static getUi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ui",
  })
  @post("{id}")
  static createUi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
