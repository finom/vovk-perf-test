import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cuf")
export default class CufController {
  @operation({
    summary: "Get Cuf",
  })
  @get()
  static getCuf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cuf",
  })
  @post("{id}")
  static createCuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
