import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bou")
export default class BouController {
  @operation({
    summary: "Get Bou",
  })
  @get()
  static getBou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bou",
  })
  @post("{id}")
  static createBou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
