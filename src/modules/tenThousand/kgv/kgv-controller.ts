import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgv")
export default class KgvController {
  @operation({
    summary: "Get Kgv",
  })
  @get()
  static getKgv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kgv",
  })
  @post("{id}")
  static createKgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
