import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exj")
export default class ExjController {
  @operation({
    summary: "Get Exj",
  })
  @get()
  static getExj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exj",
  })
  @post("{id}")
  static createExj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
