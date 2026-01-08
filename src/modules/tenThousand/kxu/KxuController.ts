import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxu")
export default class KxuController {
  @operation({
    summary: "Get Kxu",
  })
  @get()
  static getKxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxu",
  })
  @post("{id}")
  static createKxu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
