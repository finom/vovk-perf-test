import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnh")
export default class HnhController {
  @operation({
    summary: "Get Hnh",
  })
  @get()
  static getHnh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hnh",
  })
  @post("{id}")
  static createHnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
