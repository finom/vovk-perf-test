import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgx")
export default class KgxController {
  @operation({
    summary: "Get Kgx",
  })
  @get()
  static getKgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgx",
  })
  @post("{id}")
  static createKgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
