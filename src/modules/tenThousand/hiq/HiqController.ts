import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hiq")
export default class HiqController {
  @operation({
    summary: "Get Hiq",
  })
  @get()
  static getHiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hiq",
  })
  @post("{id}")
  static createHiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
