import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khh")
export default class KhhController {
  @operation({
    summary: "Get Khh",
  })
  @get()
  static getKhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khh",
  })
  @post("{id}")
  static createKhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
