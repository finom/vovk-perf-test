import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qb")
export default class QbController {
  @operation({
    summary: "Get Qb",
  })
  @get()
  static getQb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qb",
  })
  @post("{id}")
  static createQb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
