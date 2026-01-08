import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfh")
export default class KfhController {
  @operation({
    summary: "Get Kfh",
  })
  @get()
  static getKfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfh",
  })
  @post("{id}")
  static createKfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
