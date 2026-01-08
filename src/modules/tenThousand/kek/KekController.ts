import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kek")
export default class KekController {
  @operation({
    summary: "Get Kek",
  })
  @get()
  static getKek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kek",
  })
  @post("{id}")
  static createKek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
