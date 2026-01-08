import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khx")
export default class KhxController {
  @operation({
    summary: "Get Khx",
  })
  @get()
  static getKhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khx",
  })
  @post("{id}")
  static createKhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
