import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkb")
export default class KkbController {
  @operation({
    summary: "Get Kkb",
  })
  @get()
  static getKkb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kkb",
  })
  @post("{id}")
  static createKkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
