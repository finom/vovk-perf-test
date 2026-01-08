import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cws")
export default class CwsController {
  @operation({
    summary: "Get Cws",
  })
  @get()
  static getCws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cws",
  })
  @post("{id}")
  static createCws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
