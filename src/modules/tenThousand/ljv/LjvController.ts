import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljv")
export default class LjvController {
  @operation({
    summary: "Get Ljv",
  })
  @get()
  static getLjv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ljv",
  })
  @post("{id}")
  static createLjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
