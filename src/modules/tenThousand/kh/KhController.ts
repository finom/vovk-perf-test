import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kh")
export default class KhController {
  @operation({
    summary: "Get Kh",
  })
  @get()
  static getKh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kh",
  })
  @post("{id}")
  static createKh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
