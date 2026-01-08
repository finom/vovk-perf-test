import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyk")
export default class LykController {
  @operation({
    summary: "Get Lyk",
  })
  @get()
  static getLyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyk",
  })
  @post("{id}")
  static createLyk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
