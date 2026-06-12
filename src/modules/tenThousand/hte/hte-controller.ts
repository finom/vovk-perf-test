import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hte")
export default class HteController {
  @operation({
    summary: "Get Hte",
  })
  @get()
  static getHte = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hte",
  })
  @post("{id}")
  static createHte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
