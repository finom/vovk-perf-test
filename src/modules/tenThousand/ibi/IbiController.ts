import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibi")
export default class IbiController {
  @operation({
    summary: "Get Ibi",
  })
  @get()
  static getIbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibi",
  })
  @post("{id}")
  static createIbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
