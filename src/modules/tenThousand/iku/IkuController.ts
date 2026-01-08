import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iku")
export default class IkuController {
  @operation({
    summary: "Get Iku",
  })
  @get()
  static getIku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iku",
  })
  @post("{id}")
  static createIku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
