import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnr")
export default class HnrController {
  @operation({
    summary: "Get Hnr",
  })
  @get()
  static getHnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnr",
  })
  @post("{id}")
  static createHnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
