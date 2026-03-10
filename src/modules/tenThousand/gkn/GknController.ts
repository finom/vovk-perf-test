import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkn")
export default class GknController {
  @operation({
    summary: "Get Gkn",
  })
  @get()
  static getGkn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gkn",
  })
  @post("{id}")
  static createGkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
