import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khc")
export default class KhcController {
  @operation({
    summary: "Get Khc",
  })
  @get()
  static getKhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khc",
  })
  @post("{id}")
  static createKhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
