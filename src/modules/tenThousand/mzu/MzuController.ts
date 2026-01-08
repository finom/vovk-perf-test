import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzu")
export default class MzuController {
  @operation({
    summary: "Get Mzu",
  })
  @get()
  static getMzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzu",
  })
  @post("{id}")
  static createMzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
