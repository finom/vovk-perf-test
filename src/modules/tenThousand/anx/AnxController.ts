import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anx")
export default class AnxController {
  @operation({
    summary: "Get Anx",
  })
  @get()
  static getAnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anx",
  })
  @post("{id}")
  static createAnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
