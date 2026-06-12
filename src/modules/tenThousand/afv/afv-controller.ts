import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afv")
export default class AfvController {
  @operation({
    summary: "Get Afv",
  })
  @get()
  static getAfv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afv",
  })
  @post("{id}")
  static createAfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
