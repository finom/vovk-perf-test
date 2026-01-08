import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khp")
export default class KhpController {
  @operation({
    summary: "Get Khp",
  })
  @get()
  static getKhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khp",
  })
  @post("{id}")
  static createKhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
