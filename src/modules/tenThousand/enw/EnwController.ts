import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enw")
export default class EnwController {
  @operation({
    summary: "Get Enw",
  })
  @get()
  static getEnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enw",
  })
  @post("{id}")
  static createEnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
