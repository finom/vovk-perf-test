import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iye")
export default class IyeController {
  @operation({
    summary: "Get Iye",
  })
  @get()
  static getIye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iye",
  })
  @post("{id}")
  static createIye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
