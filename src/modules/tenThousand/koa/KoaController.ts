import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("koa")
export default class KoaController {
  @operation({
    summary: "Get Koa",
  })
  @get()
  static getKoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koa",
  })
  @post("{id}")
  static createKoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
