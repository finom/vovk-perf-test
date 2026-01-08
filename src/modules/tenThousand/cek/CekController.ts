import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cek")
export default class CekController {
  @operation({
    summary: "Get Cek",
  })
  @get()
  static getCek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cek",
  })
  @post("{id}")
  static createCek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
