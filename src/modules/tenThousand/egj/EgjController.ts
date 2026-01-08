import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egj")
export default class EgjController {
  @operation({
    summary: "Get Egj",
  })
  @get()
  static getEgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egj",
  })
  @post("{id}")
  static createEgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
