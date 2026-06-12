import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("luc")
export default class LucController {
  @operation({
    summary: "Get Luc",
  })
  @get()
  static getLuc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Luc",
  })
  @post("{id}")
  static createLuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
