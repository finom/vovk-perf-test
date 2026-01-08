import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sq")
export default class SqController {
  @operation({
    summary: "Get Sq",
  })
  @get()
  static getSq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sq",
  })
  @post("{id}")
  static createSq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
