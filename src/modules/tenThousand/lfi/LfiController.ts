import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfi")
export default class LfiController {
  @operation({
    summary: "Get Lfi",
  })
  @get()
  static getLfi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lfi",
  })
  @post("{id}")
  static createLfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
