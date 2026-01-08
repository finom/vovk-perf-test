import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khf")
export default class KhfController {
  @operation({
    summary: "Get Khf",
  })
  @get()
  static getKhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khf",
  })
  @post("{id}")
  static createKhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
