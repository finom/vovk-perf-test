import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkf")
export default class KkfController {
  @operation({
    summary: "Get Kkf",
  })
  @get()
  static getKkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkf",
  })
  @post("{id}")
  static createKkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
