import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hiy")
export default class HiyController {
  @operation({
    summary: "Get Hiy",
  })
  @get()
  static getHiy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hiy",
  })
  @post("{id}")
  static createHiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
