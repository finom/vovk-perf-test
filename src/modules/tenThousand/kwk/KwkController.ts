import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwk")
export default class KwkController {
  @operation({
    summary: "Get Kwk",
  })
  @get()
  static getKwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwk",
  })
  @post("{id}")
  static createKwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
