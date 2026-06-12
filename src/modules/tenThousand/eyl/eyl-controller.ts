import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyl")
export default class EylController {
  @operation({
    summary: "Get Eyl",
  })
  @get()
  static getEyl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyl",
  })
  @post("{id}")
  static createEyl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
