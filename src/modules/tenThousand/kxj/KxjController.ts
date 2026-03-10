import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxj")
export default class KxjController {
  @operation({
    summary: "Get Kxj",
  })
  @get()
  static getKxj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxj",
  })
  @post("{id}")
  static createKxj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
