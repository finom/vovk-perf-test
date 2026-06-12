import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arj")
export default class ArjController {
  @operation({
    summary: "Get Arj",
  })
  @get()
  static getArj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Arj",
  })
  @post("{id}")
  static createArj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
