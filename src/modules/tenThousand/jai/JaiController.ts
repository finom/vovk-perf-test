import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jai")
export default class JaiController {
  @operation({
    summary: "Get Jai",
  })
  @get()
  static getJai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jai",
  })
  @post("{id}")
  static createJai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
