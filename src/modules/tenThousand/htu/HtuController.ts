import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htu")
export default class HtuController {
  @operation({
    summary: "Get Htu",
  })
  @get()
  static getHtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htu",
  })
  @post("{id}")
  static createHtu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
