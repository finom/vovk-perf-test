import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbd")
export default class HbdController {
  @operation({
    summary: "Get Hbd",
  })
  @get()
  static getHbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbd",
  })
  @post("{id}")
  static createHbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
