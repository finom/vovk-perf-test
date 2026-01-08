import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khd")
export default class KhdController {
  @operation({
    summary: "Get Khd",
  })
  @get()
  static getKhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khd",
  })
  @post("{id}")
  static createKhd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
