import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkh")
export default class KkhController {
  @operation({
    summary: "Get Kkh",
  })
  @get()
  static getKkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkh",
  })
  @post("{id}")
  static createKkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
