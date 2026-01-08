import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kun")
export default class KunController {
  @operation({
    summary: "Get Kun",
  })
  @get()
  static getKun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kun",
  })
  @post("{id}")
  static createKun = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
