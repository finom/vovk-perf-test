import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alh")
export default class AlhController {
  @operation({
    summary: "Get Alh",
  })
  @get()
  static getAlh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Alh",
  })
  @post("{id}")
  static createAlh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
