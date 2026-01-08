import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("koo")
export default class KooController {
  @operation({
    summary: "Get Koo",
  })
  @get()
  static getKoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koo",
  })
  @post("{id}")
  static createKoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
