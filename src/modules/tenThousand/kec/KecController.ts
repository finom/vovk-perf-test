import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kec")
export default class KecController {
  @operation({
    summary: "Get Kec",
  })
  @get()
  static getKec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kec",
  })
  @post("{id}")
  static createKec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
