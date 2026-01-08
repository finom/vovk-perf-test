import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhc")
export default class NhcController {
  @operation({
    summary: "Get Nhc",
  })
  @get()
  static getNhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhc",
  })
  @post("{id}")
  static createNhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
