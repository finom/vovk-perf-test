import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpq")
export default class JpqController {
  @operation({
    summary: "Get Jpq",
  })
  @get()
  static getJpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpq",
  })
  @post("{id}")
  static createJpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
