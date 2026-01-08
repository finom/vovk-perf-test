import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kum")
export default class KumController {
  @operation({
    summary: "Get Kum",
  })
  @get()
  static getKum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kum",
  })
  @post("{id}")
  static createKum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
