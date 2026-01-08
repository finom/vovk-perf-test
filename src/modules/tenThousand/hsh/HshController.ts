import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsh")
export default class HshController {
  @operation({
    summary: "Get Hsh",
  })
  @get()
  static getHsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsh",
  })
  @post("{id}")
  static createHsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
