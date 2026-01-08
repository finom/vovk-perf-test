import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqi")
export default class KqiController {
  @operation({
    summary: "Get Kqi",
  })
  @get()
  static getKqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqi",
  })
  @post("{id}")
  static createKqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
