import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khz")
export default class KhzController {
  @operation({
    summary: "Get Khz",
  })
  @get()
  static getKhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khz",
  })
  @post("{id}")
  static createKhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
