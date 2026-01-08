import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehj")
export default class EhjController {
  @operation({
    summary: "Get Ehj",
  })
  @get()
  static getEhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehj",
  })
  @post("{id}")
  static createEhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
