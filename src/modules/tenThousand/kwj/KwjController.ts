import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwj")
export default class KwjController {
  @operation({
    summary: "Get Kwj",
  })
  @get()
  static getKwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwj",
  })
  @post("{id}")
  static createKwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
