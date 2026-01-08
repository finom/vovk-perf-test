import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avt")
export default class AvtController {
  @operation({
    summary: "Get Avt",
  })
  @get()
  static getAvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avt",
  })
  @post("{id}")
  static createAvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
