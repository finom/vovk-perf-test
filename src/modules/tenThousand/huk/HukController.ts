import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("huk")
export default class HukController {
  @operation({
    summary: "Get Huk",
  })
  @get()
  static getHuk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Huk",
  })
  @post("{id}")
  static createHuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
