import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iws")
export default class IwsController {
  @operation({
    summary: "Get Iws",
  })
  @get()
  static getIws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iws",
  })
  @post("{id}")
  static createIws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
