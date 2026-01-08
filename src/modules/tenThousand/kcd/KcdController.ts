import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcd")
export default class KcdController {
  @operation({
    summary: "Get Kcd",
  })
  @get()
  static getKcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcd",
  })
  @post("{id}")
  static createKcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
