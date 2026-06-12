import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kay")
export default class KayController {
  @operation({
    summary: "Get Kay",
  })
  @get()
  static getKay = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kay",
  })
  @post("{id}")
  static createKay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
