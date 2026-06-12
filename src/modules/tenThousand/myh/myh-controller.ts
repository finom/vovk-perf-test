import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myh")
export default class MyhController {
  @operation({
    summary: "Get Myh",
  })
  @get()
  static getMyh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Myh",
  })
  @post("{id}")
  static createMyh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
