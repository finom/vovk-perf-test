import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alx")
export default class AlxController {
  @operation({
    summary: "Get Alx",
  })
  @get()
  static getAlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alx",
  })
  @post("{id}")
  static createAlx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
