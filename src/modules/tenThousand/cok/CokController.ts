import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cok")
export default class CokController {
  @operation({
    summary: "Get Cok",
  })
  @get()
  static getCok = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cok",
  })
  @post("{id}")
  static createCok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
