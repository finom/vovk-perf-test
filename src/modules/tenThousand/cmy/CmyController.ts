import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmy")
export default class CmyController {
  @operation({
    summary: "Get Cmy",
  })
  @get()
  static getCmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmy",
  })
  @post("{id}")
  static createCmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
