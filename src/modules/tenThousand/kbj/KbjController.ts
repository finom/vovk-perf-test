import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbj")
export default class KbjController {
  @operation({
    summary: "Get Kbj",
  })
  @get()
  static getKbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbj",
  })
  @post("{id}")
  static createKbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
