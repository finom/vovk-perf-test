import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcu")
export default class KcuController {
  @operation({
    summary: "Get Kcu",
  })
  @get()
  static getKcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcu",
  })
  @post("{id}")
  static createKcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
