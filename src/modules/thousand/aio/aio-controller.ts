import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aio")
export default class AioController {
  @operation({
    summary: "Get Aio",
  })
  @get()
  static getAio = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aio",
  })
  @post("{id}")
  static createAio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
