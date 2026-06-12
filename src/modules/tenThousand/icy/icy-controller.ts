import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icy")
export default class IcyController {
  @operation({
    summary: "Get Icy",
  })
  @get()
  static getIcy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Icy",
  })
  @post("{id}")
  static createIcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
