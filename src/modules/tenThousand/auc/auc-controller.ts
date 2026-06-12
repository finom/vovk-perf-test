import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("auc")
export default class AucController {
  @operation({
    summary: "Get Auc",
  })
  @get()
  static getAuc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Auc",
  })
  @post("{id}")
  static createAuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
