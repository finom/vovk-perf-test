import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crt")
export default class CrtController {
  @operation({
    summary: "Get Crt",
  })
  @get()
  static getCrt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Crt",
  })
  @post("{id}")
  static createCrt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
