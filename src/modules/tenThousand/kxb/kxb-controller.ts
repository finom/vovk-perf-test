import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxb")
export default class KxbController {
  @operation({
    summary: "Get Kxb",
  })
  @get()
  static getKxb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxb",
  })
  @post("{id}")
  static createKxb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
