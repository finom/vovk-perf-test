import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elv")
export default class ElvController {
  @operation({
    summary: "Get Elv",
  })
  @get()
  static getElv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elv",
  })
  @post("{id}")
  static createElv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
