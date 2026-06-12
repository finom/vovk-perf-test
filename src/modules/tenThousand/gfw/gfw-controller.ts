import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfw")
export default class GfwController {
  @operation({
    summary: "Get Gfw",
  })
  @get()
  static getGfw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfw",
  })
  @post("{id}")
  static createGfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
