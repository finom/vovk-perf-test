import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idk")
export default class IdkController {
  @operation({
    summary: "Get Idk",
  })
  @get()
  static getIdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idk",
  })
  @post("{id}")
  static createIdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
