import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apj")
export default class ApjController {
  @operation({
    summary: "Get Apj",
  })
  @get()
  static getApj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apj",
  })
  @post("{id}")
  static createApj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
