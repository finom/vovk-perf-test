import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgu")
export default class HguController {
  @operation({
    summary: "Get Hgu",
  })
  @get()
  static getHgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgu",
  })
  @post("{id}")
  static createHgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
