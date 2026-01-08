import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jts")
export default class JtsController {
  @operation({
    summary: "Get Jts",
  })
  @get()
  static getJts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jts",
  })
  @post("{id}")
  static createJts = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
