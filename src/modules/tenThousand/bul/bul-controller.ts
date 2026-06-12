import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bul")
export default class BulController {
  @operation({
    summary: "Get Bul",
  })
  @get()
  static getBul = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bul",
  })
  @post("{id}")
  static createBul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
