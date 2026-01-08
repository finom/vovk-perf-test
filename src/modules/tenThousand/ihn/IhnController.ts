import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihn")
export default class IhnController {
  @operation({
    summary: "Get Ihn",
  })
  @get()
  static getIhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihn",
  })
  @post("{id}")
  static createIhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
