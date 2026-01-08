import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khg")
export default class KhgController {
  @operation({
    summary: "Get Khg",
  })
  @get()
  static getKhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khg",
  })
  @post("{id}")
  static createKhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
