import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgk")
export default class KgkController {
  @operation({
    summary: "Get Kgk",
  })
  @get()
  static getKgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgk",
  })
  @post("{id}")
  static createKgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
