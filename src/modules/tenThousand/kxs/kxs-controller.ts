import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxs")
export default class KxsController {
  @operation({
    summary: "Get Kxs",
  })
  @get()
  static getKxs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxs",
  })
  @post("{id}")
  static createKxs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
