import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elk")
export default class ElkController {
  @operation({
    summary: "Get Elk",
  })
  @get()
  static getElk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Elk",
  })
  @post("{id}")
  static createElk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
