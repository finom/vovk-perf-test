import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebs")
export default class EbsController {
  @operation({
    summary: "Get Ebs",
  })
  @get()
  static getEbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebs",
  })
  @post("{id}")
  static createEbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
