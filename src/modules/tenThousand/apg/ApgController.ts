import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apg")
export default class ApgController {
  @operation({
    summary: "Get Apg",
  })
  @get()
  static getApg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apg",
  })
  @post("{id}")
  static createApg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
