import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("div")
export default class DivController {
  @operation({
    summary: "Get Div",
  })
  @get()
  static getDiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Div",
  })
  @post("{id}")
  static createDiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
