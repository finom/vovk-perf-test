import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myj")
export default class MyjController {
  @operation({
    summary: "Get Myj",
  })
  @get()
  static getMyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myj",
  })
  @post("{id}")
  static createMyj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
