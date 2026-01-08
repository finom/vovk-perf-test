import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhw")
export default class NhwController {
  @operation({
    summary: "Get Nhw",
  })
  @get()
  static getNhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhw",
  })
  @post("{id}")
  static createNhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
